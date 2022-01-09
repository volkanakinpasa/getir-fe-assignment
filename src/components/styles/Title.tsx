import { styled, theme } from 'twin.macro';

const ProductTitle = styled.div`
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: ${theme`colors.black500`};
`;

const FilterTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${theme`colors.grayscale`};
`;

export { FilterTitle, ProductTitle };
