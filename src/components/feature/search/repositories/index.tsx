'use client';

import { Skeleton } from '@/components/_ui/skeleton';
import { repositoriesAtom } from '@/queries/repository';
import { useAtom } from 'jotai';
import RepositoryCard from './card';
export default function SearchRepositories() {
  const [{ data, isPending, isError }] = useAtom(repositoriesAtom);

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="grid h-full w-full grid-cols-1 gap-4">
      {isPending &&
        Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="col-span-1 h-32 w-full" />
        ))}
      {data?.data &&
        data.data.items.map((item) => (
          <RepositoryCard key={item.id} repository={item} />
        ))}
    </div>
  );
}
