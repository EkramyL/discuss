'use server';

import { auth } from '@/auth';
import { prisma } from '@/db/prisma';
import { Post } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    otherErr?: string;
  };
}

const createPostAction = async (
  slug: string,
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> => {
  const validation = createPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        otherErr: 'you should be logged in to do so',
      },
    };
  }

  const topic = await prisma.topic.findFirst({
    where: { slug },
  });

  if (!topic) {
    return {
      errors: {
        otherErr: 'no topic was found',
      },
    };
  }
  let post: Post;
  try {
    post = await prisma.post.create({
      data: {
        title: validation.data.title,
        content: validation.data.content,
        userId: session.user.id,
        topicId: topic.id,
      },
    });
  } catch (error) {
    return {
      errors: {
        otherErr: 'something went wrong',
      },
    };
  }

  revalidatePath(`/topics/${slug}`);
  redirect(`/topics/${slug}/posts/${post.id}`);
};

export default createPostAction;
