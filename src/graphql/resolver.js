import { users } from "../../database/users.js"
import { books } from "../../database/books.js"

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    books: () => books(),
    users: () => users(),
  },
}
