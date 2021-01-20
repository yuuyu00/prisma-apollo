import { PostResolvers } from "../../../gqlTypes";

export const Post: PostResolvers = {
  author: async (parent, _, context) => {
    const author = await context.prisma.user.findUnique({
      where: { id: parent.authorId },
    });
    if (!author) throw new Error("author not found");

    return author;
  },
};
