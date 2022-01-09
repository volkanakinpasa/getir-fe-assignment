import tw, { css } from 'twin.macro';

import Style from '../styles/SearchFilter.styled';

/** @jsxImportSource @emotion/react */

function SearchFilter({
  placeholder,
  onChange,
}: {
  placeholder?: string;
  onChange: (value: string) => void;
}) {
  return (
    <Style
      type="text"
      placeholder={placeholder}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
    ></Style>
  );
}

export default SearchFilter;
