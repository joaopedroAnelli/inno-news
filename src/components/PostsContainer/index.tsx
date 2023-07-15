'use client';

import getPosts from '@/graphql/queries/getPosts';
import { useQuery } from '@apollo/client';
import PostCard from '@/components/PostCard';

export default function PostsContainer() {
  const { loading, data } = useQuery(getPosts);

  if (loading) return 'Loading...';

  return (
    <div>
      {data?.posts.map((post) => (
        <PostCard.Root key={post.id}>
          <PostCard.Cover
            src={post.coverImage?.url || ''}
            alt='Imagem da Notícia'
          />
          <PostCard.Content>
            <PostCard.Title>{post.title}</PostCard.Title>
            <PostCard.Excerpt>{post.excerpt}</PostCard.Excerpt>
            <PostCard.CTA href={`/posts/${post.id}`}>Ver Artigo</PostCard.CTA>
          </PostCard.Content>
        </PostCard.Root>
      ))}
    </div>
  );
}
