import tw, { styled } from 'twin.macro';

/** @jsxImportSource @emotion/react */
const Tag = styled.div`
  width: 60px;
  height: 30px;
  display: flex;
  align-items: center;

  border-radius: 2px;

  font-size: 13px;
  ${tw`flex items-center justify-center mr-2`}

  ${({ selected }: { selected?: boolean }) =>
    selected
      ? `background: #1EA4CE;color: #F2F0FD;`
      : `background: #f2f0fd;  color: #1ea4ce;`}

  &:hover {
    background: #1ea4ce;
    color: #f2f0fd;
  }
  cursor: pointer;
`;

export default Tag;
