import { MutationResolvers } from "../../../gqlTypes";

export const createUser: MutationResolvers["createUser"] = async (
  {},
  { input: { name, email } },
  context
) => context.prisma.user.create({ data: { name, email } });
