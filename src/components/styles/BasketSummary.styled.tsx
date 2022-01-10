import tw, { styled } from 'twin.macro';

const BasketSummary = styled.div`
  width: 130px;
  background: #147594;

  right: 0;
  span {
    ${tw`mx-1`}
  }
  ${tw`hidden lg:(h-full flex  items-center justify-center text-white text-sm )`}
`;

export default BasketSummary;
