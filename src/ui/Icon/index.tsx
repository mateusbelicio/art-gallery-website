import icons from '@/assets/icons.svg';

interface IconProps {
  name: string;
  width: number;
  height: number;
}

function Icon({ name, width, height }: IconProps) {
  return (
    <svg width={width} height={height}>
      <use xlinkHref={`${icons}#icon-${name}`} />
    </svg>
  );
}

export default Icon;
