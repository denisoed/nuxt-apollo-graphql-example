import gql from 'graphql-tag';

export const GET_USERS = gql`
  query GetUsers($age: Int) {
    users(age: $age) {
      name
      age
    }
  }
`
