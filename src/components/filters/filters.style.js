import { css } from '@emotion/css';
import { colors } from '../../utils/style-helpers';

export const filterContainer = css`
  width: 100%;
  margin-bottom: 2rem;
  font-weight: 600;
`;

export const filterInputsDiv = css`
  display: flex;
  flex-direction: column;

  > div {
    flex: 0 0 100%;
    margin-bottom: 2rem;
    margin-right: 0;
  }

  > div:first-of-type {
    margin-bottom: 1rem;
  }

  @media (min-width: 576px) {
    flex-direction: row;

    > div {
      display: flex;
      flex-direction: column;
      flex: 0 0 calc(50% - 8px);
      margin-right: 16px;
    }

    > div:last-of-type {
      margin-right: 0;
    }
  }
`;

export const filterCheckboxDiv = css`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  > div {
    margin-bottom: 0.8rem;
  }
`;

export const filterButtonsContainer = css`
  display: flex;
  justify-content: flex-start;
  margin-top: 1.6rem;

  button {
    display: inline-block;
    margin-bottom: 0;
    width: 8rem;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    white-space: nowrap;
    padding: 1rem 1.2rem;
    font-size: 1.6rem;
    line-height: 1.2;
    border-radius: 2px;
    border: 1px solid transparent;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  button:first-of-type {
    margin-right: 1rem;
    color: #fff;
    background-color: ${colors.gray3};
    &:hover {
      background-color: ${colors.gray2};
    }
  }

  button:nth-of-type(2) {
    color: #fff;
    background-color: ${colors.primary};
    border: 1px solid transparent;
    &:hover {
      opacity: 0.8;
    }
  }
`;
