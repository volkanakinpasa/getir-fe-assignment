import tw, { css } from 'twin.macro';
import { useEffect, useState } from 'react';

import { FilterTitle } from '../styles/Title.styled';
import RadioButton from '../RadioButton';
import { Sorting } from '../../common/enums';
import { letterSpacing } from '../styles/common.styled';

/** @jsxImportSource @emotion/react */

const container = css`
  height: 184px;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  ${tw`mt-3 p-6 flex flex-col space-y-4`}
`;

const row = css`
  height: 22px;
  ${tw`flex items-center`}
`;

const text = css`
  ${letterSpacing('0.16px')}
  ${tw`ml-3 text-primaryBlack`}
`;

function FilterSorting() {
  const [selected, setSelected] = useState<Sorting>();

  const onClick = (value: Sorting) => {
    setSelected(value);
  };

  useEffect(() => {
    setSelected(Sorting.HighToLow);
  }, []);

  return (
    <div>
      <FilterTitle>Sorting</FilterTitle>
      <div css={[container]}>
        <div css={[row]}>
          <RadioButton
            onClick={() => onClick(Sorting.LowtoHigh)}
            selected={selected === Sorting.LowtoHigh}
          />
          <div css={[text]}>Price low to high</div>
        </div>
        <div css={[row]}>
          <RadioButton
            onClick={() => onClick(Sorting.HighToLow)}
            selected={selected === Sorting.HighToLow}
          />
          <div css={[text]}>Price high to low</div>
        </div>
        <div css={[row]}>
          <RadioButton
            onClick={() => onClick(Sorting.NewToOld)}
            selected={selected === Sorting.NewToOld}
          />
          <div css={[text]}>New to old</div>
        </div>
        <div css={[row]}>
          <RadioButton
            onClick={() => onClick(Sorting.OldToNew)}
            selected={selected === Sorting.OldToNew}
          />
          <div css={[text]}>Old to new</div>
        </div>
      </div>
    </div>
  );
}

export default FilterSorting;
