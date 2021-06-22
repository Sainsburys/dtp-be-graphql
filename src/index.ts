import { server } from './api';

const port = process.env.SERVER_PORT ?? 3000;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
