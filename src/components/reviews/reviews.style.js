import { css } from '@emotion/css';
import { contentWidth } from '../app.style';
import { colors, getTextStyle } from '../../utils/style-helpers';

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

export const paginationStyle = css`
  label: pagination;
  display: inline-block;
  padding-left: 0;

  li {
    display: inline-block;
    color: ${colors.gray4};
    height: 40px;
    padding: 8px 16px;
    border: 1px solid ${colors.gray2};

    a {
      color: ${colors.gray4};
      text-decoration: none;
    }

    &.active {
      background-color: ${colors.primary};
      color: white;
      border: 1px solid ${colors.primary};
      a {
        color: white;
      }
    }
    &:hover:not(.active) {
      background-color: ${colors.gray1};
      cursor: pointer;
    }
    &:first-of-type {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &:last-of-type {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`;

export const paginationContainer = css`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  > div:first-of-type {
    display: flex;
    justify-content: flex-end;
    height: 40px;
    
    > div {
      width: 12rem;
    }
  }
  
  .Dropdown-control {
    height: 100%;
  }
  
  ul {
    display: flex;
    justify-content: flex-end;
  }
  
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    height: 5rem;
    
    > div:first-of-type {
      margin:bottom: 1rem;
      justify-content: flex-start;
      flex: 1;
    }
    
    ul {
      flex: 2;
    }
  }
`;
