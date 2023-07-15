export type PostCardRootProps = {
  children: React.ReactNode;
};

export function PostCardRoot({ children }: PostCardRootProps) {
  return (
    <div className='bg-white border rounded-md max-w-2xl m-4 flex'>
      {children}
    </div>
  );
}
