import gql from "graphql-tag"

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = () => gql`
  type Book {
    id: Int!
    title: String
    author: String
  }

  type User {
    id: Int!
    name: String
    email: String
    projects: [Project]
  }

  type Project {
    title: String
    active: Boolean
    members: [User]
  }

  type Query {
    books: [Book]
    users: [User]
  }
`
