import { css } from '@emotion/css';
import headerImage from '../assets/images/background.png';
import { getTextStyle } from '../style-helpers';

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const headerBackground = css`
  width: 100vw;
  height: 480px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  background-size: cover;
  background: black;
  overflow: hidden;
  background: -webkit-linear-gradient(rgba(5, 6, 15, 0.4), rgba(5, 6, 15, 0.4)),
    url(${headerImage}) no-repeat center;
  background: linear-gradient(rgba(5, 6, 15, 0.4), rgba(5, 6, 15, 0.4)),
    url(${headerImage}) no-repeat center;
  filter: contrast(120%) brightness(140%);
  border-bottom-right-radius: 60% 10%;
  border-bottom-left-radius: 60% 10%;

  @media (max-width: 991.98px) {
    max-height: 320px;
  }

  @media (max-width: 479.98px) {
    max-height: 150px;
  }
`;

export const contentWidth = css`
  width: 70%;
  max-width: 1440px;

  @media (max-width: 991.98px) {
    width: 80%;
  }

  @media (max-width: 479.98px) {
    width: 90%;
  }
`;

export const headerText = css`
  margin: 40px auto 60px;
  ${contentWidth}

  p:first-of-type {
    ${getTextStyle({ size: 's3', color: 'white', weight: 'bold', marginSpace: [0, 0, 12] })}
  }

  p:last-of-type {
    ${getTextStyle({ size: 's1', color: 'white', weight: 'bold', marginSpace: [0] })}
  }
`;
