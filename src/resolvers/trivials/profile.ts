import { ProfileResolvers } from "../../../gqlTypes";

export const Profile: ProfileResolvers = {
  user: async (parent, _, context) => {
    const user = await context.prisma.user.findUnique({
      where: { id: parent.userId },
    });
    if (!user) throw new Error("user not found");

    return user;
  },
};
