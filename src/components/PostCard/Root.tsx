export type PostCardRootProps = {
  children: React.ReactNode;
};

export function PostCardRoot({ children }: PostCardRootProps) {
  return (
    <div className='bg-white border rounded-md max-w-2xl m-4 flex dark:bg-slate-800 dark:border-slate-700'>
      {children}
    </div>
  );
}
