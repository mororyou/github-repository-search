'use client';

import { Button } from '@/components/_ui/button';
import { repositoriesAtom } from '@/queries/repository';
import { useAtom } from 'jotai';
import { Loader2 } from 'lucide-react';
import RepositoryCard from './card';
import Skeletons from './skeltons';

export default function SearchRepositories() {
  const [{ data, isError, isFetching, fetchNextPage, hasNextPage }] =
    useAtom(repositoriesAtom);

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="grid h-full w-full grid-cols-1 gap-4">
      {data?.pages.map((page) =>
        page.data?.items.map((item) => (
          <RepositoryCard key={item.id} repository={item} />
        )),
      )}

      {isFetching && <Skeletons count={3} />}

      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} disabled={isFetching}>
          {isFetching && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          もっと見る
        </Button>
      )}
    </div>
  );
}
