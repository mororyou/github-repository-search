import { Separator } from '@/components/_ui/separator';
import SearchRepositoryForm from './form';
import SearchRepositories from './repositories';
export default function SearchPageContainer() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center p-4 md:p-12">
      <SearchRepositoryForm />

      <Separator className="my-4 h-px w-full bg-gray-200" />

      <SearchRepositories />
    </section>
  );
}
