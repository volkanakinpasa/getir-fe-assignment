import tw, { styled } from 'twin.macro';

const ProductImage = styled.div`
  height: 124px;
  max-width: 124px;
  border-radius: 12px;

  border: 1.17666px solid #f3f0fe; //update this 17666px
  ${tw`flex items-center justify-center w-full sm:(w-96) bg-white2`}

  img {
    width: 92px;
    height: 92px;
  }
`;

export default ProductImage;
