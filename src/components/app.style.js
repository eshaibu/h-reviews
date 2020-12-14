import { css } from '@emotion/css';
import headerImage from '../assets/images/background.png';
import { getTextStyle } from '../utils/style-helpers';

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const headerBackground = css`
  position: absolute;
  top: 0px;
  left: 0px;
  background: black;
  background: -webkit-linear-gradient(rgba(5, 6, 15, 0.4), rgba(5, 6, 15, 0.4)),
    url(${headerImage}) no-repeat center;
  background: linear-gradient(rgba(5, 6, 15, 0.4), rgba(5, 6, 15, 0.4)),
    url(${headerImage}) no-repeat center;
  filter: contrast(120%) brightness(140%);
  background-size: cover;
  overflow: hidden;
  z-index: -1;
  border-bottom-right-radius: 60% 10%;
  border-bottom-left-radius: 60% 10%;
  width: 100%;
  height: 200px;

  @media (min-width: 480px) {
    height: 320px;
  }

  @media (min-width: 992px) {
    height: 480px;
  }
`;

export const contentWidth = css`
  width: 90%;
  margin-bottom: 1rem;

  @media (min-width: 480px) {
    width: 80%;
  }

  @media (min-width: 992px) {
    width: 70%;
    max-width: 1440px;
  }
`;

export const headerText = css`
  ${contentWidth}
  margin: 30px auto 40px;

  @media (min-width: 576px) {
    margin: 40px auto 60px;
  }

  p:first-of-type {
    ${getTextStyle({ size: 's3', color: 'white', weight: 'bold', marginSpace: [0, 0, 12] })}
  }

  p:last-of-type {
    ${getTextStyle({ size: 's1', color: 'white', weight: 'bold', marginSpace: [0] })}
  }
`;
