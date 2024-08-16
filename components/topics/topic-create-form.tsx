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
import React from 'react';
import { useFormState } from 'react-dom';

const TopicCreateForm = () => {
  const [formState, action] = useFormState(createTopicAction, {
    errors: {},
  });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create Topic</Button>
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
            />
            <Textarea
              label="Discription"
              placeholder="Discripe Your Topic"
              labelPlacement="outside"
              name="discription"
            />
            <Button type="submit">submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default TopicCreateForm;
