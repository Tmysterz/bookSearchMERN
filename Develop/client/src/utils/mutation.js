import { gql } from '@apollo/client';

// works correctly
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

// works correctly 
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

// works correctly
export const SAVE_BOOK = gql`
mutation saveBook($bookData: BookInfo) {
    saveBook(bookData: $bookData) {
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

// works correctly 
export const REMOVE_BOOK = gql`
mutation Mutation($bookId: String!) {
    removeBook(bookId: $bookId) {
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