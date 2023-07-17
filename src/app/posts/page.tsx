'use client';
import { useQuery } from '@apollo/client';

import getPosts from '@/graphql/queries/getPosts';
import PostCard from '@/components/PostCard';
import { EyeIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const { loading, data } = useQuery(getPosts);

  if (loading) return 'Loading...';

  return (
    <main className='bg-slate-100 flex justify-center h-full flex-col items-center dark:bg-slate-900'>
      {data?.posts.map((post) => (
        <PostCard.Root key={post.id}>
          <PostCard.Cover
            src={post.coverImage?.url || ''}
            alt='Imagem da Notícia'
            blurDataURL={post.coverBlurhash || ''}
          />
          <PostCard.Content>
            <PostCard.Title>{post.title}</PostCard.Title>
            <PostCard.Excerpt>{post.excerpt}</PostCard.Excerpt>
            <PostCard.CTA href={`/posts/${post.id}`}>
              <EyeIcon className='inline mr-2' style={{ width: 20 }} />
              Ver Artigo
            </PostCard.CTA>
          </PostCard.Content>
        </PostCard.Root>
      ))}
    </main>
  );
}
