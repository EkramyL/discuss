import { prisma } from '@/db/prisma';
import { notFound } from 'next/navigation';

interface PostShowProps {
  postId: string;
}
const PostShow = async ({ postId }: PostShowProps) => {
  const post = await prisma.post.findUnique({
    where: { id: postId },
  });
  if (!post) {
    return notFound();
  }
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold my-2">{post.title}</h1>
      <p className="p-4 border rounded">{post.content}</p>
    </div>
  );
};

export default PostShow;
