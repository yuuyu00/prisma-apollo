import { QueryResolvers } from "../../../gqlTypes";

export const posts: QueryResolvers["posts"] = ({}, _args, context) =>
  context.prisma.post.findMany({ include: { author: true } });
