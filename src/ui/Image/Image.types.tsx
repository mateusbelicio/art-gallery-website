import { HTMLAttributes } from 'react';

export type ImageMIMEType =
  | 'image/apng'
  | 'image/avif'
  | 'image/gif'
  | 'image/jpeg'
  | 'image/png'
  | 'image/svg+xml'
  | 'image/webp';

export interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  srcSet: {
    device: 'mobile' | 'tablet' | 'desktop';
    src: string;
    srcDensity?: string;
    type?: ImageMIMEType;
  }[];
  alt: string;
  srcFallback: string;
}
