import ShowPageContainer from '@/components/feature/show';
import { getRepository } from '@/server/repositories/repository';
import { redirect } from 'next/navigation';

type ShowPageProps = {
  params: Promise<{ owner: string; repositoryName: string }>;
};

export default async function ShowPage({ params }: ShowPageProps) {
  const { owner, repositoryName } = await params;

  if (!owner || !repositoryName) {
    redirect('/404');
  }

  const repository = await getRepository({
    owner,
    repositoryName,
  });

  if (!repository.isSuccess || !repository.data) {
    redirect('/404');
  }

  return <ShowPageContainer repository={repository.data} />;
}
