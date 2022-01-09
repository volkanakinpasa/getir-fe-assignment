import tw, { css } from 'twin.macro';

import { FilterTitle } from '../styles/Title';
import SearchFilter from '../productListContainer/SearchFilter';
import SearchFilterList from '../productListContainer/SearchFilterList';

/** @jsxImportSource @emotion/react */
const container = css`
  height: 244px;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  outline-width: 0px;
  ${tw`mt-3 p-6 flex flex-col`}
`;

const onChange = (value: string) => {
  console.log(value);
};

const onSelect = (value: string) => {};

const list = [
  'Desk',
  'Office',
  'Wood',
  'Volcano',
  'Nature',
  'Desert',
  'Ocean',
  'Cliffs',
];

function FilterTags() {
  return (
    <div>
      <FilterTitle>Tags</FilterTitle>
      <div css={[container]}>
        <SearchFilter placeholder={'Search tag'} onChange={onChange} />
        <SearchFilterList list={list} onSelect={onSelect} />
      </div>
    </div>
  );
}

export default FilterTags;
