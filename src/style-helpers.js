import { css } from '@emotion/css';

const spacing = (args) =>
  args
    .slice(0, 4)
    .reduce((str, pts) => `${str} ${pts}px`, '')
    .trim();

export const colors = {
  primary: '#173753',
  white: '#ffffff',
  blue: '#0576db',
  gray: '#8d919b',
  gray1: '#e0e4e8',
  gray2: '#c3c8d2',
};

const fontSize = {
  lg: {
    s1: '3rem',
    s2: '2rem',
    s3: '1.8rem',
    s4: '1.6rem',
    s5: '1.4rem',
  },
  md: {
    s1: '2.4rem',
    s2: '1.8rem',
    s3: '1.4rem',
    s4: '1.2rem',
  },
};

const getFontSize = (size) => {
  return css`
    font-size: ${fontSize.lg[size]};

    @media (max-width: 991.98px) {
      font-size: ${fontSize.md[size]};
    }
  `;
};

export const getTextStyle = (props) => {
  const { size = 's3', color = 'primary', weight, textAlign, marginSpace } = props;
  return css`
    ${getFontSize(size)};
    color: ${colors[color]};
    ${weight && `font-weight: ${weight};`}
    ${textAlign && `text-align: ${textAlign};`}
    ${marginSpace && `margin: ${spacing(marginSpace)};`}
    line-height: 1.2;
  `;
};
