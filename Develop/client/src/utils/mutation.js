import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }  
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }  
`;

// need this mutation double checked 
// resolver and type def seems off
export const SAVE_BOOK = gql`
mutation saveBook($bookId: String!, $userId: ID!) {
    saveBook(bookId: $bookId, userId: $userId) {
      _id
      username
      savedBooks {
        bookId
      }
    }
  }
`;

// need this mutation double checked 
// resolver and type def seems off 
export const REMOVE_BOOK = gql`
mutation Mutation($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      savedBooks {
        bookId
      }
    }
  }
`;