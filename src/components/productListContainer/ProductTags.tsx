import tw, { css } from 'twin.macro';

/** @jsxImportSource @emotion/react */

const ProductTagsStyle = css`
  ${tw`flex items-center justify-center`}
`;

function ProductTags() {
  return (
    <div css={ProductTagsStyle}>
      <div>1</div>
      <div>2</div>
      <div></div>
    </div>
  );
}

export default ProductTags;
