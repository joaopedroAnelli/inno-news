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
    <div className='flex flex-col items-center bg-slate-100 w-full h-full dark:bg-slate-900'>
      <div className='w-full h-36 lg:h-96 relative'>
        <Image
          src={data?.post?.coverImage?.url || ''}
          alt='Imagem da Notícia'
          objectFit='cover'
          className='mb-8'
          fill
          // width={500}
          // height={500}
        />
      </div>

      <div className='mt-8 lg:w-1/3'>
        <h1 className='text-2xl mb-4 mx-4 lg:mx-0 dark:text-slate-200 font-bold'>
          {data?.post?.title}
        </h1>

        <div
          className='mx-4 lg:mx-0 dark:text-slate-200 mb-4'
          dangerouslySetInnerHTML={{ __html: data?.post?.content.html || '' }}
        ></div>
      </div>
    </div>
  );
}
