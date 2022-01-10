import tw, { css } from 'twin.macro';

const letterSpacing = (size: string) => css`
  letter-spacing: ${size};
`;

const lineHeight = (size: string) => css`
  line-height: ${size};
`;
const fontSize = (size: string) => css`
  font-size: ${size};
`;

const lineHeight20 = css`
  ${lineHeight('20px')}
`;

const lineHeight24 = css`
  ${lineHeight('24px')}
`;

const fontSize12 = css`
  ${fontSize('12px')}
`;

const fontSize14 = css`
  ${fontSize('14px')}
`;
const fontSize16 = css`
  ${fontSize('16px')}
`;

export {
  letterSpacing,
  lineHeight20,
  lineHeight24,
  fontSize12,
  fontSize14,
  fontSize16,
};
