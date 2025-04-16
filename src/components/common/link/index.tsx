import NextLink, { type LinkProps as NextLinkProps } from 'next/link';
import LoadingIndicator from '../LoadingIndicator';

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
  className?: string;
}
export function Link({ children, ...props }: LinkProps) {
  return (
    <NextLink {...props}>
      {children}
      <LoadingIndicator />
    </NextLink>
  );
}
