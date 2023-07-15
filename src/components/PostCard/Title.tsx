export type PostCardTitleProps = {
  children: React.ReactNode;
};

export function PostCardTitle({ children }: PostCardTitleProps) {
  return <h1 className='text-2xl m-4 mb-2'>{children}</h1>;
}
