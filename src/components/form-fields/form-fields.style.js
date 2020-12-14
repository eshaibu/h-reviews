import { css } from '@emotion/css';
import { colors } from '../../utils/style-helpers';

export const checkboxStyle = css`
  display: flex;
  align-items: center;
  height: 2.4rem;
  input {
    appearance: none;
    height: 100%;
    width: 2.4rem;
    margin: 0
    background-color: white;
    border: 1px solid ${colors.gray2};
    border-radius: 0.4rem;
    outline: none;
    cursor: pointer;
    transition: background-color 0.1s ease-in, border-color 0.1s ease-in;

    &:focus {
      border-color: ${colors.gray1};
    }

    &:checked {
      background-color: ${colors.primary};
      border-color: ${colors.primary};
      &:focus {
        border-color: ${colors.primary};
      }
    }
  }

  label {
    color: #212529;
    font-weight: 400;
    cursor: pointer;
    margin-left: 0.4rem;
  }
  label: checkbox;
`;
