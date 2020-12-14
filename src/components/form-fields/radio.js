import { cx } from '@emotion/css';
import { func, string } from 'prop-types';
import { radioStyle } from './form-fields.style';

const Radio = ({ id, name, value, label, selected, onChange, className = '' }) => {
  const isChecked = selected === value;

  return (
    <label className={cx(radioStyle, className)} htmlFor={id}>
      {label}
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <span className="checkmark" />
    </label>
  );
};

Radio.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  selected: string.isRequired,
  value: string.isRequired,
  label: string,
  onChange: func.isRequired,
  className: string,
};

export default Radio;
