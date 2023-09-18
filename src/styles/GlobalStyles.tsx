import { createGlobalStyle } from 'styled-components';

import { Colors } from './Colors';
import { Typography } from './Typography';
import { Reset } from './Reset';

const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${Colors}
  ${Typography}
`;

export default GlobalStyles;
