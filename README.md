# graphql-basics

```bash
npm install @apollo/server graphql
```

```bash
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
```

```bash
# The ApolloServer constructor requires two parameters: your schema
# definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

# Passing an ApolloServer instance to the `startStandaloneServer` function:
#  1. creates an Express app
#  2. installs your ApolloServer instance as middleware
#  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
```

```bash
query {
  books {
    title
    author
  }
}

```

```bash
query {
  users {
    name
    email
    projects {
      title
    }
  }
}

```

```bash

# Here exclaimation at end of active Project type means
# field value must be present, otherwise throws an error

type Project {
  title: String
  active: Boolean!
  members: [User]
}
```

Documentation

```bash
https://www.apollographql.com/docs/apollo-server/getting-started
```
