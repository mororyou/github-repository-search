import ShowPageContainer from '@/components/feature/show';
import { getRepository } from '@/server/repositories/repository';

type ShowPageProps = {
  params: Promise<{ owner: string; repositoryName: string }>;
};

export default async function ShowPage({ params }: ShowPageProps) {
  const { owner, repositoryName } = await params;

  if (!owner || !repositoryName) {
    return <div>指定されたリポジトリは見つかりませんでした</div>;
  }

  const repository = await getRepository({
    owner,
    repositoryName,
  });

  if (!repository.isSuccess || !repository.data) {
    return <div>指定されたリポジトリは見つかりませんでした</div>;
  }

  return <ShowPageContainer repository={repository.data} />;
}
