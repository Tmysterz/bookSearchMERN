import { gql } from '@apollo/client';

// works correctly
export const QUERY_USERS = gql`
    query allUsers {
        users {
            _id
            username
            book
        }
    }
`;

// works correctly
export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      book
    }
  }
`;


// works correctly
export const QUERY_SAVED = gql`
  query saved {
    saved {
      _id
      username
      book
    }
  }
`;
