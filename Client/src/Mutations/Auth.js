import { gql } from "@apollo/client";
export const Login = gql`
  mutation authentication($username: String!, $password: String!) {
    authentication {
      login(parameters: { username: $username, password: $password }) {
        roleId
        token
        userId
        userName
      }
    }
  }
`;