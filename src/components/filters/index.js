import { arrayOf, func, string } from 'prop-types';
import {
  filterContainer,
  filterInputsDiv,
  filterCheckboxDiv,
  filterButtonsContainer,
} from './filters.style';
import Checkbox from '../form-fields/checkbox';

const channels = ['AIRBNB', 'HOLIDU', 'BOOKINGCOM'];

const Filter = (props) => {
  const { selectedChannels, checkBoxOnChange, clearFilters, applyFilters } = props;

  return (
    <div className={filterContainer}>
      <div className={filterInputsDiv}>
        <div>
          <span>Channels</span>
          <div className={filterCheckboxDiv}>
            {channels.map((channel, index) => (
              <Checkbox
                key={index}
                onChange={checkBoxOnChange}
                selectedChannels={selectedChannels}
                name={channel}
                label={channel}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={filterButtonsContainer}>
        <button type="button" onClick={clearFilters}>
          Clear
        </button>
        <button type="button" onClick={applyFilters}>
          Apply
        </button>
      </div>
    </div>
  );
};

Filter.propTypes = {
  selectedChannels: arrayOf(string).isRequired,
  checkBoxOnChange: func.isRequired,
  clearFilters: func.isRequired,
  applyFilters: func.isRequired,
};

export default Filter;
