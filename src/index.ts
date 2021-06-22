import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Film {
    title: String
  }

  type Query {
    film(id: String): Film!
    upcoming: [Film!]!
    search(query: String): [Film]!
  }
`;
const resolvers = {
  Query: {
    film: () => {
      console.log('foo');
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const port = process.env.SERVER_PORT ?? 3000;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
