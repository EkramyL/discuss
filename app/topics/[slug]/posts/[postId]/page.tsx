import PostShow from '@/components/posts/post-show';
import Link from 'next/link';
import React from 'react';

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

const PostShowPage = ({ params }: PostShowPageProps) => {
  const { slug, postId } = params;

  return (
    <div className="space-x-3">
      <Link href={`/topics/${slug}`}>
        {'<'} Back to {slug}
      </Link>
      <PostShow postId={postId} />
    </div>
  );
};

export default PostShowPage;
