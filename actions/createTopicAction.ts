'use server';

// import { getErrMessageForm } from '@/utils/getErrMessageForm';
import { prisma } from '@/db/prisma';
import { Topic } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: 'name should be more than 3 lowercase with no symboles',
    }),
  discription: z
    .string()
    .min(10, { message: 'discription shouldbe at least 10 characters long' }),
});

interface CreateTopicState {
  errors: {
    name?: string[];
    discription?: string[];
    otherErrs?: string;
  };
}

const createTopicAction = async (
  formState: CreateTopicState,
  formDate: FormData
): Promise<CreateTopicState> => {
  const validation = createTopicSchema.safeParse({
    name: formDate.get('name'),
    discription: formDate.get('discription'),
  });
  if (!validation.success) {
    // const errors = validation.error.errors;

    // Form Error Messages
    // const nameErrMessage = getErrMessageForm('name', errors);
    // const discriptionErrMessage = getErrMessageForm('discription', errors);
    // console.log(nameErrMessage);
    // console.log(discriptionErrMessage);
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  let topic: Topic;
  try {
    topic = await prisma.topic.create({
      data: {
        slug: validation.data.name,
        description: validation.data.discription,
      },
    });
  } catch (error) {
    return {
      errors: {
        otherErrs: 'failed to submit topic, something went wrong',
      },
    };
  }
  revalidatePath('/');
  redirect(`topics/${topic!.slug}`);
};

export default createTopicAction;
