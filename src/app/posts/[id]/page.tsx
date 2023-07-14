'use client';

import { useQuery } from '@apollo/client';
import getPost from '@/graphql/queries/getPost';
import Image from 'next/image';

export default function PostPage({ params }: { params: { id: string } }) {
  const { loading, data } = useQuery(getPost, {
    variables: { id: params.id },
  });

  if (loading) return 'Loading...';

  return (
    <div className='flex flex-col items-center bg-slate-100 w-full h-full'>
      <Image
        src={data?.post?.coverImage?.url || ''}
        alt='Imagem da Notícia'
        objectFit='cover'
        className='rounded-md mb-8'
        width={500}
        height={500}
      />

      <div className='w-1/3'>
        <h1 className='text-2xl mb-4'>{data?.post?.title}</h1>

        <div
          dangerouslySetInnerHTML={{ __html: data?.post?.content.html || '' }}
        ></div>
      </div>
    </div>
  );
}
