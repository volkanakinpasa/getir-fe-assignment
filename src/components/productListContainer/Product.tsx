import tw, { css, styled } from 'twin.macro';
/** @jsxImportSource @emotion/react */

const ProductContainer2 = styled.div`
  ${tw`w-full flex justify-center`}
`;
const ProductContainer = styled.div`
  ${tw` w-full sm:(w-96)`}
  height: 225px;
  max-width: 124px;
`;

const price = css`
  ${tw`mt-2`}
  height: 23px;

  color: #1ea4ce;
`;
const productName = css`
  height: 40px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  color: #191919;
`;
const addButton = css`
  ${tw`mt-2 flex items-center justify-center`}
  width: 100%;
  height: 22px;
  background: #1ea4ce;
  text-align: center;
  color: #ffffff;
  font-size: 12px;
`;

const ImageContainer = styled.div`
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

function Product() {
  return (
    <ProductContainer2>
      <ProductContainer>
        <ImageContainer>
          <img src="" alt="" />
        </ImageContainer>
        <div css={[price]}>₺ 14,99</div>
        <div css={[productName]}>Gorgeous Office Mug</div>
        <div css={[addButton]}>Add</div>
      </ProductContainer>
    </ProductContainer2>
  );
}

export default Product;
