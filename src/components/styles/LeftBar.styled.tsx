import tw, { styled } from 'twin.macro';

const LeftBar = styled.section`
  width: 296px;
  ${tw`mr-4 flex flex-col space-y-6 hidden lg:(block)`}
`;

export default LeftBar;
