'use client';
import createPostAction from '@/actions/createPostAction';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import { Button, Input, Textarea } from '@nextui-org/react';
import React from 'react';
import { useFormState } from 'react-dom';

interface PostCreateFormProps {
  slug: string;
}

const PostCreateForm = ({ slug }: PostCreateFormProps) => {
  const [formState, action] = useFormState(createPostAction.bind(null, slug), {
    errors: {},
  });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary"> create post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col w-80 p-4 gap-4">
            <h3 className="text-lg">Create a Post</h3>
            <Input
              name="title"
              label="Title"
              placeholder="title"
              labelPlacement="outside"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title && formState.errors.title[0]}
            />
            <Textarea
              name="content"
              label="Content"
              placeholder="content"
              labelPlacement="outside"
              isInvalid={!!formState.errors.content}
              errorMessage={
                formState.errors.content && formState.errors.content[0]
              }
            />
            {formState.errors.otherErr && (
              <div className="bg-red-200 border border-red-400 p-2">
                {' '}
                {formState.errors.otherErr}
              </div>
            )}
            <Button type="submit">submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default PostCreateForm;
