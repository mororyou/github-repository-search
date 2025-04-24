import { Avatar, AvatarFallback, AvatarImage } from '@/components/_ui/avatar';
import { ShowRepositoryResultSchema } from '@/schemas/validations/show';
import { CircleDot, Eye, GitBranch, Star } from 'lucide-react';
import ResultCard from './result-card';

type ShowPageContainerProps = Readonly<{
  repository: Readonly<ShowRepositoryResultSchema>;
}>;

export default function ShowPageContainer({
  repository,
}: ShowPageContainerProps) {
  return (
    <div className="flex flex-col gap-4" data-testid="show-page-container">
      <div className="flex items-center gap-4">
        <Avatar className="col-span-1 row-span-2 h-16 w-16">
          <AvatarImage src={repository.owner.avatar_url} />
          <AvatarFallback>{repository.owner.login.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">{repository.name}</p>
          <p className="text-sm text-gray-500">{repository.language}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <ResultCard
          title="スター数"
          value={repository.stargazers_count}
          icon={<Star className="h-4 w-4" />}
        />
        <ResultCard
          title="フォーク数"
          value={repository.forks_count}
          icon={<GitBranch className="h-4 w-4" />}
        />
        <ResultCard
          title="Watch数"
          value={repository.watchers_count}
          icon={<Eye className="h-4 w-4" />}
        />
        <ResultCard
          title="Issue数"
          value={repository.open_issues_count}
          icon={<CircleDot className="h-4 w-4" />}
        />
      </div>
    </div>
  );
}
