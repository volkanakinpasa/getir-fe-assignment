import './App.css';

/** @jsxImportSource @emotion/react */
import tw, { css, styled } from 'twin.macro';

import FilterBrands from './components/productFilterBar/FilterBrands';
import FilterSorting from './components/productFilterBar/FilterSorting';
import FilterTags from './components/productFilterBar/FilterTags';
import Header from './components/header/Header';
import ProductListContainer from './components/ProductListContainer';
import { createGlobalStyle } from 'styled-components';

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

function App() {
  return (
    <AppStyle>
      <GlobalStyle />
      <Header />

      <main css={[main]}>
        <LeftBar>
          <FilterSorting />
          <FilterBrands />
          <FilterTags />
        </LeftBar>
        <section>
          <ProductListContainer />
        </section>
      </main>
    </AppStyle>
  );
}

export default App;
