const { ApolloServer } = require("apollo-server");
import { volumesSchema } from "./src/schemas";
import { volumesResolver } from "./src/resolvers";
import { VolumesDataSource } from "./src/datasources";


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
