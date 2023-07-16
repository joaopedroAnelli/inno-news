export type PostCardExcerptProps = {
  children: React.ReactNode;
};

export function PostCardExcerpt({ children }: PostCardExcerptProps) {
  return (
    <p className='text-sm text-slate-400 m-4 mt-0 text-justify'>{children}</p>
  );
}
