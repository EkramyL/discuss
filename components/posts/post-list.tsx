import { PostsWithData } from '@/db/queries/posts';
import Link from 'next/link';

interface FetchPostsProps {
  fetchPosts: () => Promise<PostsWithData[]>;
}

const PostList = async ({ fetchPosts }: FetchPostsProps) => {
  const posts = await fetchPosts();
  const renderedPosts = posts.map((post) => {
    return (
      <div key={post.id} className="border rounded p-2">
        <Link href={`/topics/${post.topic.slug}/posts/${post.id}`}>
          <h3 className="text-lg font-bold">{post.title}</h3>
          <div className="flex gap-8">
            <p className="text-xs text-gray-400">By {post.user.name}</p>
            <p className="text-xs text-gray-400">
              {post._count.comments} comments
            </p>
          </div>
        </Link>
      </div>
    );
  });

  return <div>{renderedPosts}</div>;
};
export default PostList;
