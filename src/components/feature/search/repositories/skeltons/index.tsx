import { Skeleton } from '@/components/_ui/skeleton';

type SkeletonsProps = Readonly<{
  count: number;
}>;

export default function Skeletons({ count }: SkeletonsProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} className="col-span-1 h-32 w-full" />
      ))}
    </div>
  );
}
