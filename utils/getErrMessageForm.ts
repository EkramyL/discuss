import { z } from 'zod';

export const getErrMessageForm = (path: string, errors: z.ZodIssue[]) => {
  let errMessage = errors.filter((err) => {
    return err.path[0] === path;
  });
  return errMessage[0].message;
};
