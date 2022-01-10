import { createGlobalStyle } from 'styled-components';
import { fontSize12 } from './common.styled';

const GlobalStyle = createGlobalStyle`
body {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 400;
  ${fontSize12}
}
`;

export default GlobalStyle;
