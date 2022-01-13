import tw, { css, theme } from 'twin.macro';
import { useDispatch, useSelector } from 'react-redux';

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
  {
    value: 'Dickens-Franecki',
    name: 'Dickens - Franecki',
    count: 1,
  },
  {
    value: 'Weissnat-',
    name: 'Weissnat, ',
    count: 1,
  },
  {
    value: 'Cruickshank-B',
    name: 'Cruickshank',
    count: 1,
  },
  {
    value: 'Boyle-LLC',
    name: 'Boyle LLC',
    count: 1,
  },
];

function FilterBrands() {
  const dispatch = useDispatch();

  const { brands } = useSelector((state: any) => {
    return state.products.products;
  });

  const onChange = (value: string) => {
    console.log(value);
  };

  const onSelect = (value: string) => {
    // dispatch(getProducts());
  };

  return (
    <div>
      <FilterTitle>Brands</FilterTitle>
      <div css={[container]}>
        <SearchFilter placeholder={'Search brand'} onChange={onChange} />
        <SearchFilterList list={list} onSelect={onSelect} />
      </div>
    </div>
  );
}

export default FilterBrands;
