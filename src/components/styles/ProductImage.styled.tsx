import tw, { styled } from 'twin.macro';

const ProductImage = styled.div`
  ${tw`flex items-center justify-center w-full sm:(w-96)`}
  height: 124px;
  max-width: 124px;
  border-radius: 12px;
  background: #fefefe;
  border: 1.17666px solid #f3f0fe;

  img {
    width: 92px;
    height: 92px;
  }
`;

export default ProductImage;
