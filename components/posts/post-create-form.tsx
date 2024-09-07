import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import { Button } from '@nextui-org/react';
import React from 'react';

const PostCreateForm = () => {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button> create post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form>
          <div className="flex flex-col w-80 p-4 gap-4">
            <h3 className="text-lg">Create a Post</h3>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default PostCreateForm;
