import Link, { LinkProps } from 'next/link';

export type NewsCardCTAProps = LinkProps & {
  children: React.ReactNode;
};

export function NewsCardCTA({ children, ...rest }: NewsCardCTAProps) {
  return (
    <div className='flex justify-end'>
      <Link
        className='m-4 mt-12 rounded-md border p-2 text-sm hover:bg-slate-200 transition-all'
        {...rest}
      >
        {children}
      </Link>
    </div>
  );
}
