import { ApolloServer, gql, IResolvers } from "apollo-server";
import { Resolvers } from "../gqlTypes";
import { readFileSync } from "fs";
import { createContext } from "./context";
import { resolvers } from "./resolvers";

const getTypeDefs = () => {
  const schemaStr = readFileSync("schema.gql", "utf8");
  return gql`
    ${schemaStr}
  `;
};

new ApolloServer({
  typeDefs: getTypeDefs(),
  context: createContext,
  resolvers: resolvers as IResolvers<any, any> & Resolvers,
}).listen({ port: 9000 }, () => console.log("listening on 9000"));
