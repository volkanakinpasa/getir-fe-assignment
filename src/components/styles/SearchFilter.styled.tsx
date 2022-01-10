import { fontSize14, letterSpacing, lineHeight24 } from './common.styled';
import tw, { styled } from 'twin.macro';

const SearchFilter = styled.input`
  width: 248px;
  height: 48px;

  border: 2px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 2px;

  ${fontSize14}
  ${lineHeight24}

  ${letterSpacing('0.15px')}
  ${tw`px-4 text-gray2`}
`;

export default SearchFilter;
