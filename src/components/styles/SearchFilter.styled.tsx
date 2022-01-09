import tw, { styled } from 'twin.macro';

const SearchFilter = styled.input`
  width: 248px;
  height: 48px;

  border: 2px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 2px;

  font-size: 14px;
  line-height: 24px;

  letter-spacing: 0.15px;

  color: #a8a8a8;

  ${tw`px-4`}
`;

export default SearchFilter;
