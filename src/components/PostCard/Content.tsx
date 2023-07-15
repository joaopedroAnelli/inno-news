export type PostCardContent = {
  children: React.ReactNode;
};

export function PostCardContent({ children }: PostCardContent) {
  return <div className='flex flex-col flex-1'>{children}</div>;
}
