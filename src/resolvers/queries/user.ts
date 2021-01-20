import { QueryResolvers } from "../../../gqlTypes";

export const user: QueryResolvers["user"] = async ({}, { id }, context) =>
  context.prisma.user.findUnique({ where: { id } });
