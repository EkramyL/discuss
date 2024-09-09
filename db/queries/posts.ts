import { Post } from '@prisma/client';
import { prisma } from '@/db/prisma';

export type PostsWithData = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

export const fetchPostsByTopicSlug = (
  slug: string
): Promise<PostsWithData[]> => {
  return prisma.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
};
