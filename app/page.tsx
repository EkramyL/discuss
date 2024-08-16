import TopicCreateForm from '@/components/topics/topic-create-form';

export default async function Home() {
  return (
    <div className="grid grid-cols-4 p-4 gap-4">
      <div className="col-span-3">
        <h2 className="text-lg m-2">Top Posts</h2>
      </div>
      <div>
        <TopicCreateForm />
      </div>
    </div>
  );
}
