import SearchPageContainer from '@/components/feature/search';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Repository',
  description: 'Github Search Repository',
};

export default function Home() {
  return <SearchPageContainer />;
}
