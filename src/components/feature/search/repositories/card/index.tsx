import { Avatar, AvatarFallback, AvatarImage } from '@/components/_ui/avatar';
import BlurText from '@/components/_ui/BlurText';
import { Card } from '@/components/_ui/card';
import { RestEndpointMethodTypes } from '@octokit/rest';
import { Code, GitBranch, Star } from 'lucide-react';
import Link from 'next/link';
type RepositoryCardProps = {
  repository: RestEndpointMethodTypes['search']['repos']['response']['data']['items'][0];
};

export default function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <Link href={`/${repository.owner?.id}/${repository.name}`}>
      <Card className="p-6 transition-shadow duration-200 hover:shadow-lg">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="truncate text-xl font-semibold text-gray-900">
              <BlurText
                text={repository.name}
                delay={150}
                animateBy="words"
                direction="bottom"
              />
            </h3>
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
            <p className="line-clamp-2 text-gray-600">
              <BlurText
                text={repository.description}
                delay={150}
                animateBy="words"
                direction="bottom"
              />
            </p>
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
              <AvatarImage src={repository.owner?.avatar_url} />
              <AvatarFallback>
                {repository.owner?.login.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </Card>
    </Link>
  );
}
