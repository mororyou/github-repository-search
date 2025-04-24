import { Avatar, AvatarFallback, AvatarImage } from '@/components/_ui/avatar';
import { Card } from '@/components/_ui/card';
import { Link } from '@/components/common/link';
import { type SearchRepositoryResultItemSchema } from '@/schemas/validations/search';
import { Code, GitBranch, SquareArrowOutUpRight, Star } from 'lucide-react';

type RepositoryCardProps = Readonly<{
  repository: Readonly<SearchRepositoryResultItemSchema>;
}>;

export default function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <Card
      className="p-6 transition-shadow duration-200 hover:shadow-lg"
      data-testid="repository-card"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-nowrap items-center gap-2">
            <Link href={`/${repository.owner?.login}/${repository.name}`}>
              <h3 className="truncate text-xl font-semibold text-gray-900">
                {repository.name}
              </h3>
            </Link>
            <a
              href={repository.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SquareArrowOutUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <Star className="h-4 w-4" />
            <p className="text-gray-500">
              {repository.stargazers_count.toLocaleString()}
            </p>
          </div>
        </div>

        {repository.description && (
          <p className="line-clamp-2 text-gray-600">{repository.description}</p>
        )}

        {repository.topics && (
          <div className="flex flex-wrap gap-2">
            {repository.topics.map((topic) => (
              <p
                key={topic}
                className="rounded-lg bg-gray-100 px-3 py-1 text-xs text-gray-600"
              >
                {topic}
              </p>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Code className="h-4 w-4" />
              {repository.language ? (
                <p className="text-gray-500">{repository.language}</p>
              ) : (
                <p className="text-gray-500">None.</p>
              )}
            </div>
            <div className="flex items-center space-x-1">
              <GitBranch className="h-4 w-4" />
              <p className="text-gray-500">
                {repository.forks_count.toLocaleString()}
              </p>
            </div>
          </div>
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={repository.owner?.avatar_url}
              alt={`${repository.owner?.login ?? '??'}のアバター`}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <AvatarFallback>
              {repository.owner?.login?.slice(0, 2) || '??'}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </Card>
  );
}
