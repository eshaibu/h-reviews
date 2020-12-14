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
    
    &:hover {
      background-color: ${colors.gray1};
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
    cursor: pointer;
    margin-left: 0.4rem;
  }
  label: checkbox;
`;

export const radioStyle = css`
  display: block;
  position: relative;
  padding-left: 3.5rem;
  margin-bottom: 0.8rem;
  cursor: pointer;
  height: 2.4rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Hide the browser's default radio button */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: ${colors.white};
    border: 1px solid ${colors.gray2};
    border-radius: 50%;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ .checkmark {
    background-color: ${colors.gray1};
  }

  /* When the radio button is checked, add a blue background */
  input:checked ~ .checkmark {
    background-color: ${colors.primary};
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .checkmark:after {
    top: 8px;
    left: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  label: radio;
`;
