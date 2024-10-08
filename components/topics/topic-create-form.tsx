'use client';
import createTopicAction from '@/actions/createTopicAction';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Input,
  Textarea,
  Button,
} from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useFormState } from 'react-dom';

const TopicCreateForm = () => {
  const [formState, action] = useFormState(createTopicAction, {
    errors: {},
  });
  const session = useSession();
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary" isDisabled={!session.data}>
          Create Topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col w-80 p-4 gap-4">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              label="Name"
              placeholder="Name"
              name="name"
              labelPlacement="outside"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name && formState.errors.name[0]}
            />
            <Textarea
              label="Discription"
              placeholder="Discripe Your Topic"
              labelPlacement="outside"
              name="discription"
              isInvalid={!!formState.errors.discription}
              errorMessage={
                formState.errors.discription && formState.errors.discription[0]
              }
            />
            {formState.errors.otherErrs ? (
              <div className="bg-red-200 p-2 border border-red-400">
                {formState.errors.otherErrs}
              </div>
            ) : (
              ''
            )}
            <Button type="submit">submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default TopicCreateForm;
