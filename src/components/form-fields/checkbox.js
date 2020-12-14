import { cx } from '@emotion/css';
import { arrayOf, func, string } from 'prop-types';
import { checkboxStyle } from './form-fields.style';

const Checkbox = ({ name, label, selectedChannels, onChange, className = '' }) => {
  const isChecked = selectedChannels.includes(name);

  return (
    <div className={cx(checkboxStyle, className)}>
      <input
        type="checkbox"
        onChange={onChange}
        name={name}
        value={name}
        id={name}
        checked={isChecked}
      />
      {label && <label htmlFor={name}>{label}</label>}
    </div>
  );
};

Checkbox.propTypes = {
  name: string.isRequired,
  selectedChannels: arrayOf(string).isRequired,
  label: string,
  onChange: func.isRequired,
  className: string,
};

export default Checkbox;
