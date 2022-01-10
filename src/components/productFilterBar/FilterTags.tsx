import tw, { css, theme } from 'twin.macro';

import { FilterTitle } from '../styles/Title.styled';
import ISearchFilterList from '../../interfaces/ISearchFilterList';
import SearchFilter from '../productListContainer/SearchFilter';
import SearchFilterList from '../productListContainer/SearchFilterList';

/** @jsxImportSource @emotion/react */
const container = css`
  height: 244px;
  background: ${theme`colors.primaryWhite`};
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  outline-width: 0px;
  ${tw`mt-3 p-6 flex flex-col`}
`;

const list: ISearchFilterList[] = [
  { value: 'Desk1', name: 'Desk', count: 11 },
  { value: 'Desk2', name: 'Desk', count: 11 },
  { value: 'Desk3', name: 'Desk', count: 11 },
  { value: 'Desk4', name: 'Desk', count: 11 },
  { value: 'Desk5', name: 'Desk', count: 11 },
  { value: 'Desk6', name: 'Desk', count: 11 },
  { value: 'Desk7', name: 'Desk', count: 11 },
];

function FilterTags() {
  const onChange = (value: string) => {
    console.log(value);
  };

  const onSelect = (value: string) => {};
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
