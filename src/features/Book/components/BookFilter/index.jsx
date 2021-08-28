import React, { useState } from 'react';
import PropTypes from 'prop-types';

BookFilter.propTypes = {
  handleFilter: PropTypes.func
};

function BookFilter(props) {
  const ENTER_KEY = 13
  const {handleFilter} = props
  const [keyword, setKeyword] = useState('');

  const handleChangeFilter = (value) => {
    console.log(value)
    setKeyword(value)
  };

  const triggerChange = () => {
    handleFilter(keyword);
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY) {
      // clearTimeout(this.timer)
      triggerChange()
    }
  }

  return (
    <div>
      <input 
        type="text"
        name="filter"
        value={keyword}
        onChange={e => handleChangeFilter(e.target.value)}
        onKeyDown={e => handleKeyDown(e)}
      />
    </div>
  );
}

export default BookFilter;