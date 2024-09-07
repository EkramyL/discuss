import { prisma } from '@/db/prisma';
import { Chip } from '@nextui-org/react';
import Link from 'next/link';

const TopicList = async () => {
  const topics = await prisma.topic.findMany();
  const renderedTopics = topics.map((topic) => (
    <Link key={topic.id} href={`topics/${topic.slug}`}>
      {' '}
      <Chip> {topic.slug}</Chip>{' '}
    </Link>
  ));
  return <div className="flex flex-col gap-1">{renderedTopics}</div>;
};

export default TopicList;
