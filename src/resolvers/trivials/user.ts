import { UserResolvers } from "../../../gqlTypes";

export const User: UserResolvers = {
  posts: (parent, _, context) =>
    context.prisma.post.findMany({ where: { authorId: parent.id } }),
};
