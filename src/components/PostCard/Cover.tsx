import Image, { ImageProps } from 'next/image';

export type PostCardCoverProps = ImageProps & {};

export function PostCardCover({ alt, src, ...props }: PostCardCoverProps) {
  return (
    <Image
      alt={alt}
      src={src}
      width={160}
      height={160}
      className='object-cover rounded-l-md'
      {...props}
    />
  );
}
