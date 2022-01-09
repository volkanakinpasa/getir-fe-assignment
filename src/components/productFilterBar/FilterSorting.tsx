import tw, { css, theme } from 'twin.macro';
import { useEffect, useState } from 'react';

import RadioButton from '../RadioButton';
import { Sorting } from '../../common/enums';

/** @jsxImportSource @emotion/react */

const container = css`
  ${tw`mt-3 p-6`}

  height: 184px;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
`;

const row = css`
  ${tw`mt-3 flex items-center`}
  height: 22px;
`;

const text = css`
  color: ${theme`colors.black`};
  ${tw`ml-3`}
`;

const header = css`
  color: ${theme`colors.grayscale`};
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
      <div css={[header]}>Sorting</div>
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
      </div>
    </div>
  );
}

export default FilterSorting;
