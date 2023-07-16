import Link, { LinkProps } from 'next/link';

export type PostCardCTAProps = LinkProps & {
  children: React.ReactNode;
};

export function PostCardCTA({ children, ...rest }: PostCardCTAProps) {
  return (
    <div className='flex justify-end'>
      <Link
        className='m-4 mt-12 rounded-md border p-2 text-sm hover:bg-slate-200 transition-all dark:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-800 dark:border-slate-700 dark:hover:text-slate-200  '
        {...rest}
      >
        {children}
      </Link>
    </div>
  );
}
