import tw, { styled } from 'twin.macro';

import { letterSpacing } from './common.styled';

const ProductTitle = styled.div`
  ${letterSpacing('0.25px')}
  ${tw`text-lg text-black500`};
`;

const FilterTitle = styled.div`
  ${tw`text-sm text-grayscale font-semibold`};
`;

export { FilterTitle, ProductTitle };
