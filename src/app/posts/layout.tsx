'use client';
import ApolloProvider from '@/components/ApolloProvider';

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider>{children}</ApolloProvider>;
}
