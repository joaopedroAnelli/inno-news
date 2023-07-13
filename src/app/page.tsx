'use client';
import { useQuery } from '@apollo/client';

import getPosts from '@/graphql/queries/getPosts';
import NewsCard from '@/components/NewsCard';

export default function Home() {
  const { loading, data } = useQuery(getPosts);

  if (loading) return 'Loading...';

  return (
    <main className='bg-slate-100 flex justify-center h-full flex-col items-center'>
      {data?.posts.map((post) => (
        <NewsCard.Root key={post.id}>
          <NewsCard.Cover src={post.coverImage?.url} alt='Imagem da Notícia' />
          <NewsCard.Content>
            <NewsCard.Title>{post.title}</NewsCard.Title>
            <NewsCard.Excerpt>{post.excerpt}</NewsCard.Excerpt>
            <NewsCard.CTA href={`/posts/${post.id}`}>Ver Artigo</NewsCard.CTA>
          </NewsCard.Content>
        </NewsCard.Root>
      ))}
    </main>
  );
}
