const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { ObjectId } = require('mongoose').Types

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, args, context) => {
            return User.findOne({ _id: context.user._id });
        },

        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password)

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user }; 
        },

        saveBook: async (parent, { bookData }, context) => {
            console.log(context.user)
            if (context.user) {
                const user = await User.findOneAndUpdate(
                    { _id: new ObjectId(context.user._id) },
                    {
                        $addToSet: { savedBooks: bookData },
                    },
                    {
                        new: true,
                        runValidators: true,
                    },
                );
                console.log(user)
                return user;
            }
            throw AuthenticationError;
        },

        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: new ObjectId(context.user._id) },
                    { $pull: { savedBooks: { bookId: bookId } } },
                    { new: true },
                    { runValidators: true }
                );
            }
            throw AuthenticationError;
        },
    },
};

module.exports = resolvers;