import { arrayOf, bool, func, string } from 'prop-types';
import {
  filterContainer,
  filterInputsDiv,
  filterCheckboxDiv,
  filterRadioDiv,
  resetButton,
  toggleButton,
} from './filters.style';
import Checkbox from '../form-fields/checkbox';
import { channelOptions, scoreOptions } from '../../utils/constants';
import Radio from '../form-fields/radio';

const Filter = (props) => {
  const {
    onScoreChange,
    selectedScore,
    selectedChannels,
    onChannelChange,
    showFilter,
    toggleFilter,
    clearFilters,
  } = props;

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
                {channelOptions.map((channel, index) => (
                  <Checkbox
                    key={index}
                    onChange={onChannelChange}
                    selectedOptions={selectedChannels}
                    name={channel}
                    label={channel}
                  />
                ))}
              </div>
            </div>
            <div>
              <span>Scores</span>
              <div className={filterRadioDiv}>
                {scoreOptions.map((score, index) => (
                  <Radio
                    key={index}
                    onChange={onScoreChange}
                    selected={selectedScore}
                    name="score"
                    id={`${index}-score`}
                    label={score.text}
                    value={score.value}
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
  onScoreChange: func.isRequired,
  selectedScore: string,
  clearFilters: func.isRequired,
  toggleFilter: func.isRequired,
  showFilter: bool.isRequired,
};

export default Filter;
