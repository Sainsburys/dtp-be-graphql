import { ApolloServer, gql, IResolvers } from 'apollo-server';

const typeDefs = gql`
  type Film {
    title: String
  }

  type Query {
    film(id: String): Film!
  }
`;

const resolvers = {
  Query: {
    film: (object, args, context, info) => ({
      title: `A Film With the ID ${args.id}`,
    }),
  },
};

export const server = new ApolloServer({ typeDefs, resolvers, introspection: true });
