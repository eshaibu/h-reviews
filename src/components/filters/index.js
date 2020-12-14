import { useState } from 'react';
import { arrayOf, func, string } from 'prop-types';
import { filterContainer, filterInputsDiv, filterCheckboxDiv, resetButton, toggleButton } from './filters.style';
import Checkbox from '../form-fields/checkbox';

const channels = ['AIRBNB', 'HOLIDU', 'BOOKINGCOM'];

const Filter = (props) => {
  const { selectedChannels, onChannelChange, clearFilters } = props;

  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className={filterContainer}>
      <button type="button" onClick={toggleFilter} className={toggleButton}>
        {showFilter ? 'Hide Filter' : 'Show Filter'}
      </button>
      {showFilter && (
        <>
          <div className={filterInputsDiv}>
            <div>
              <span>Channels</span>
              <div className={filterCheckboxDiv}>
                {channels.map((channel, index) => (
                  <Checkbox
                    key={index}
                    onChange={onChannelChange}
                    selectedChannels={selectedChannels}
                    name={channel}
                    label={channel}
                  />
                ))}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={clearFilters}
            disabled={!selectedChannels.length}
            className={resetButton}
          >
            Clear Filters
          </button>
        </>
      )}
    </div>
  );
};

Filter.propTypes = {
  selectedChannels: arrayOf(string).isRequired,
  onChannelChange: func.isRequired,
  clearFilters: func.isRequired,
};

export default Filter;
