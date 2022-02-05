const { ApolloServer } = require("apollo-server");
import { volumesSchema } from "./src/schemas/books.schema";
import { volumesResolver } from "./src/resolvers/volumes.resolver";
import { VolumesDataSource } from "./src/datasources/books.datasource";


async function startApolloServer(typeDefs:any, resolvers:any) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        volumesAPI: new VolumesDataSource(),
      };
    },
  });

  const { url, port } = await server.listen({ port: process.env.PORT || 4000 });
  console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
    `);
}

startApolloServer(volumesSchema,volumesResolver)
