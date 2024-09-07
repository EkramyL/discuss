import TopicCreateForm from '@/components/topics/topic-create-form';
import TopicList from '@/components/topics/topic-list';
import { Divider } from '@nextui-org/react';

export default async function Home() {
  return (
    <div className="grid grid-cols-4 p-4 gap-4">
      <div className="col-span-3">
        <h2 className="text-lg m-2">Top Posts</h2>
      </div>
      <div className="space-y-2">
        <TopicCreateForm />
        <div>
          <h2 className="text-xl font-bold mb-2"> Topic List</h2>
          <Divider className="mb-2" />
          <TopicList />
        </div>
      </div>
    </div>
  );
}
