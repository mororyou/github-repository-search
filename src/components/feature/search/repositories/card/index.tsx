import { Avatar, AvatarFallback, AvatarImage } from '@/components/_ui/avatar';
import BlurText from '@/components/_ui/BlurText';
import { Card } from '@/components/_ui/card';
import { Link } from '@/components/common/link';
import { type SearchRepositoryResultItemSchema } from '@/schemas/validations/search';
import { Code, GitBranch, SquareArrowOutUpRight, Star } from 'lucide-react';

type RepositoryCardProps = Readonly<{
  repository: Readonly<SearchRepositoryResultItemSchema>;
}>;

export default function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <Card className="p-6 transition-shadow duration-200 hover:shadow-lg">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-nowrap items-center gap-2">
            <Link href={`/${repository.owner?.login}/${repository.name}`}>
              <h3 className="truncate text-xl font-semibold text-gray-900">
                <BlurText
                  text={repository.name}
                  delay={150}
                  animateBy="words"
                  direction="bottom"
                />
              </h3>
            </Link>
            <Link href={repository.html_url}>
              <SquareArrowOutUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <Star className="h-4 w-4" />
            <BlurText
              text={repository.stargazers_count.toLocaleString()}
              delay={150}
              animateBy="words"
              direction="bottom"
            />
          </div>
        </div>

        {repository.description && (
          <BlurText
            text={repository.description}
            delay={70}
            animateBy="words"
            direction="bottom"
            className="line-clamp-2 text-gray-600"
          />
        )}

        {repository.topics && (
          <div className="flex flex-wrap gap-2">
            {repository.topics.map((topic) => (
              <BlurText
                key={topic}
                text={topic}
                delay={70}
                animateBy="words"
                direction="bottom"
                className="rounded-lg bg-gray-100 px-3 py-1 text-xs text-gray-600"
              />
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            {repository.language && (
              <div className="flex items-center space-x-1">
                <Code className="h-4 w-4" />
                <BlurText
                  text={repository.language}
                  delay={150}
                  animateBy="words"
                  direction="bottom"
                />
              </div>
            )}
            <div className="flex items-center space-x-1">
              <GitBranch className="h-4 w-4" />
              <BlurText
                text={repository.forks_count.toLocaleString()}
                delay={150}
                animateBy="words"
                direction="bottom"
              />
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
