import { posts } from "./data";

export const getPostBySlug = (slug: string) => {
  return posts.find((post) => post.slug === slug);
};
