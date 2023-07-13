export type NewsCardExcerptProps = {
  children: React.ReactNode;
};

export function NewsCardExcerpt({ children }: NewsCardExcerptProps) {
  return <p className='text-sm text-slate-400 m-4 mt-0'>{children}</p>;
}
