import { createGlobalStyle } from 'styled-components';

import { Colors } from './Colors';
import { Typography } from './Typography';
import { Reset } from './Reset';
import { MapBox } from './MapBox';

const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${Colors}
  ${Typography}
  ${MapBox}
`;

export default GlobalStyles;
