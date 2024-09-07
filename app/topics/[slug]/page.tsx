import PostCreateForm from '@/components/posts/post-create-form';
import React from 'react';
interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

const TopicShowPage = ({ params }: TopicShowPageProps) => {
  const { slug } = params;
  return (
    <div className="grid grid-cols-4">
      <h1 className="col-span-3 font-bold text-2xl">{slug}</h1>
      <div>
        <PostCreateForm />
      </div>
    </div>
  );
};

export default TopicShowPage;
