import { css } from '@emotion/css';
import { colors } from '../../utils/style-helpers';

export const filterContainer = css`
  width: 100%;
`;

export const filterInputsDiv = css`
  display: flex;
  flex-direction: column;

  > div {
    flex: 0 0 100%;
    margin-bottom: 1rem;
  }

  > div:nth-of-type(2) {
    margin-top: 2rem;
  }

  @media (min-width: 576px) {
    flex-direction: row;

    > div {
      display: flex;
      flex-direction: column;
      flex: 0 0 calc(50% - 8px);
      margin-right: 16px;
    }

    > div:nth-of-type(2) {
      margin-right: 0;
      margin-top: 0;
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

export const filterRadioDiv = css`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const toggleButton = css`
  display: inline-block;
  margin-bottom: 2rem;
  min-width: 10rem;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  white-space: nowrap;
  padding: 1rem 1.2rem;
  font-size: 1.6rem;
  line-height: 1.2;
  border-radius: 2px;
  border: 1px solid ${colors.blue};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: ${colors.blue};
  background-color: ${colors.white};

  &:hover {
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
    opacity: 0.8;
  }
`;

export const resetButton = css`
  display: inline-block;
  margin-bottom: 3rem;
  min-width: 10rem;
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
  color: #fff;
  background-color: ${colors.primary};
  border: 1px solid transparent;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    pointer-events: none;
  }
`;
