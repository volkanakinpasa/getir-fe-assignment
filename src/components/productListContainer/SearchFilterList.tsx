import tw, { css } from 'twin.macro';

import Checkbox from '../Checkbox';
import ISearchFilterList from '../../interfaces/ISearchFilterList';
import { letterSpacing } from '../styles/common.styled';
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
  ${letterSpacing('0.16px')}
  ${tw`ml-3`}
`;

const itemName = css`
  ${tw`overflow-hidden text-primaryBlack`}
`;

const count = css`
  ${tw`pl-1 text-gray2`}
`;

function SearchFilterList({
  list,
  onSelect,
}: {
  list: ISearchFilterList[];
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
          <div css={row} key={item.value}>
            <Checkbox
              onClick={(value: string) => onClick(value)}
              selected={false}
            />
            <div css={[text]}>
              <span css={[itemName]}>{item.name}</span>
              <span css={[count]}>({item.count})</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchFilterList;
