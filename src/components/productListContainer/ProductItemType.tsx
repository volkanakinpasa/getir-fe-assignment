import tw, { css } from 'twin.macro';

import Tag from '../styles/Tag.styled';

/** @jsxImportSource @emotion/react */

const ProductTagsStyle = css`
  ${tw`flex items-center`}
`;

function ProductItemType() {
  return (
    <div css={ProductTagsStyle}>
      <Tag selected={true}>mug</Tag>
      <Tag>shirt</Tag>
    </div>
  );
}

export default ProductItemType;
