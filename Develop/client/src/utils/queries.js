import { gql } from '@apollo/client';

// works correctly
export const QUERY_USERS = gql`
    query users {
        users {
            _id
            username
            book
        }
    }
`;

// works correctly
export const QUERY_SINGLE_USER = gql`
  query user {
    user {
      _id
      username
      book
    }
  }
`;


// works correctly
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username 
      email
      bookCount 
      savedBooks{
        _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
