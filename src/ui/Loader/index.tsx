import * as Styles from './Loader.style';

interface LoaderProps {
  full?: boolean;
}

function Loader({ full = false }: LoaderProps) {
  const ContainerStyled = full ? Styles.ContainerFull : Styles.Container;

  return (
    <ContainerStyled>
      <Styles.IconAnimated />
    </ContainerStyled>
  );
}

export default Loader;
