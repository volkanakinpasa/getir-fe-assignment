import tw, { css, theme } from 'twin.macro';

import Checkbox from '../Checkbox';
import { useEffect } from 'react';

/** @jsxImportSource @emotion/react */

const container = css`
  height: 130px;

  &::-webkit-scrollbar {
    width: 4px;
    height: 78px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 4px;
  }

  ${tw`overflow-y-scroll mt-4 flex flex-col space-y-2`}
`;

const row = css`
  ${tw`flex items-center ml-1 py-1`}
`;

const text = css`
  color: ${theme`colors.black`};
  letter-spacing: 0.16px;
  ${tw`ml-3`}
`;

function SearchFilterList({
  list,
  onSelect,
}: {
  list: string[];
  onSelect: (value: string) => void;
}) {
  const onClick = (value: string) => {};

  useEffect(() => {}, []);

  return (
    <div css={container}>
      <div css={row}>
        <Checkbox onClick={(value: string) => onClick(value)} selected={true} />
        <div css={[text]}> All</div>
      </div>
      {list.map((item) => {
        return (
          <div css={row} key={item}>
            <Checkbox
              onClick={(value: string) => onClick(value)}
              selected={false}
            />
            <div css={[text]}> {item}</div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchFilterList;
