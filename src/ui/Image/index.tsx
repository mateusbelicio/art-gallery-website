import { useState, useRef, useEffect } from 'react';
import { Variants, motion } from 'framer-motion';

import { media } from '@/utils/mediaDevices';
import { ImageProps } from './Image.types';
import { StyledImage } from './Image.style';

const imageAnimate: Variants = {
  idle: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  loading: {
    opacity: [0.5, 1],
    filter: 'blur(8px)',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

function Image({ srcSet, srcFallback, alt, lazy = true }: ImageProps) {
  const [loaded, setLoaded] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const currentImage = useRef<string>(srcFallback);

  useEffect(() => {
    window.addEventListener('resize', handleChangeImage);
    return () => window.removeEventListener('resize', handleChangeImage);
  }, []);

  const handleLoad = () => {
    currentImage.current = imageRef.current?.currentSrc || '';
    setLoaded(imageRef.current?.complete || false);
  };

  const handleChangeImage = () => {
    if (currentImage.current !== imageRef.current?.currentSrc) {
      setLoaded(false);
      currentImage.current = imageRef.current?.currentSrc || currentImage.current;
    } else {
      setLoaded(imageRef.current?.complete || false);
    }
  };

  return (
    <StyledImage $isLoading={!loaded}>
      {srcSet.map((src) => (
        <source
          onLoad={handleLoad}
          key={src.src}
          media={media(src.device)}
          type={src.type || ''}
          srcSet={src.src + (src.srcDensity ? `, ${src.srcDensity} 2x` : '')}
        />
      ))}
      <motion.img
        ref={imageRef}
        src={srcFallback}
        alt={alt}
        onLoad={handleLoad}
        loading={lazy ? 'lazy' : 'eager'}
        variants={imageAnimate}
        initial="idle"
        animate={loaded ? 'idle' : 'loading'}
      />
    </StyledImage>
  );
}

export default Image;
