import { prismaVersion } from "@prisma/client";
import { MutationResolvers } from "../../../gqlTypes";

export const createPost: MutationResolvers["createPost"] = (
  {},
  { input: { title, content, published, authorId } },
  context
) =>
  context.prisma.post.create({
    data: { title, content, published, author: { connect: { id: authorId } } },
  });
