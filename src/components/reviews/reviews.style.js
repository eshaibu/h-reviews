import { css } from '@emotion/css';
import { contentWidth } from '../app.style';
import { colors, getTextStyle } from '../../style-helpers';

export const reviewsContainer = css`
  background-color: #fff;
  box-shadow: 0 4px 10px 0 rgba(49, 53, 61, 0.24);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
  min-height: 70vh;
  border-radius: 1rem;
  ${contentWidth}
`;

export const title = css`
  ${getTextStyle({ size: 's1', weight: 'bold', marginSpace: [0, 0, 30] })}
`;

export const mLeft16 = css`
  margin-left: 1.6rem;
`;

export const reviewDiv = css`
  border-bottom: 1px solid #e0e4e8;
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;
  color: ${colors.primary};

  p:first-of-type {
    font-weight: bold;
  }

  p {
    margin: 1.6rem 0 0;
  }

  .author {
    ${getTextStyle({ size: 's5', color: 'gray', weight: 'bold' })}
  }

  .published {
    ${getTextStyle({ size: 's5', color: 'gray', marginSpace: [8, 0, 0] })}
  }
`;

export const reviewHeader = css`
  display: flex;
  height: 40px;
  align-items: center;
`;

export const scoreDiv = css`
  height: 100%;
  width: 70px;
  background-color: ${colors.blue};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  span {
    color: ${colors.white};
  }
`;

export const feedbackDiv = css`
  margin-top: 1.6rem;
  display: flex;

  span {
    ${mLeft16}
  }
`;
