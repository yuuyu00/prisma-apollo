import { Resolvers } from "../../gqlTypes";
import { user, posts } from "./queries";
import { createUser, createPost } from "./mutations";
import { Post, Profile, User } from "./trivials";

const Query: Resolvers["Query"] = {
  user,
  posts,
};
const Mutation: Resolvers["Mutation"] = {
  createUser,
  createPost,
};

export const resolvers: Resolvers = {
  Query,
  Mutation,
  Post,
  Profile,
  User,
};
