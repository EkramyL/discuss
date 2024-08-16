'use server';

// import { getErrMessageForm } from '@/utils/getErrMessageForm';
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
  return {
    errors: {},
  };
};

export default createTopicAction;
