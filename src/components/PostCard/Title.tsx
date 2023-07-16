export type PostCardTitleProps = {
  children: React.ReactNode;
};

export function PostCardTitle({ children }: PostCardTitleProps) {
  return (
    <h1 className='text-xl md:text-2xl m-4 mb-2 dark:text-slate-200'>
      {children}
    </h1>
  );
}
