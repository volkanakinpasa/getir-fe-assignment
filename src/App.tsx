import './App.css';

import tw, { css, styled, theme } from 'twin.macro';

import FilterSorting from './components/productFilterBar/FilterSorting';
import Header from './components/header/Header';
import ProductListContainer from './components/productListContainer/ProductListContainer';
import { ProductTitle } from './components/styles/Title';
import { createGlobalStyle } from 'styled-components';

/** @jsxImportSource @emotion/react */

const AppStyle = styled.div`
  background: #fafafa;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
`;

const main = css`
  ${tw`flex justify-center text-sm`}
  margin-top: 38px;
`;

const LeftBar = styled.section`
  ${tw`mr-4`}
  width: 296px;
`;

const RigthBar = styled.section`
  ${tw`w-full h-full`}
  max-width: 608px;
`;

const Footer = styled.footer`
  margin-top: 136px;
  font-size: 13px;
  line-height: 174%;
  color: ${theme`colors.primaryBlue`};
  ${tw`w-full flex items-center justify-center text-center py-6`}
`;

function App() {
  return (
    <AppStyle>
      <GlobalStyle />
      <Header />

      <main css={[main]}>
        <LeftBar>
          <FilterSorting />
          {/* <FilterBrands />
          <FilterTags /> */}
        </LeftBar>
        <RigthBar>
          <ProductTitle>Products</ProductTitle>
          <ProductListContainer />
        </RigthBar>
      </main>
      <Footer>2019 Market</Footer>
    </AppStyle>
  );
}

export default App;
