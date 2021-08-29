import React, { useContext, useState } from 'react';
import BookContext from '../../BookContext'

function BookFilter(props) {
  const ENTER_KEY = 13

  const bookMeta = useContext(BookContext);
  const [localKeyword, setLocalKeyword] = useState(bookMeta.searchKeyword)
  console.log(`localKeyword: ${localKeyword}`)

  const handleChangeFilter = (value) => {
    setLocalKeyword(value)
  };

  const triggerChange = () => {
    bookMeta.setPage(1);
    bookMeta.setSearchKeyword(localKeyword);
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
        value={localKeyword}
        onChange={e => handleChangeFilter(e.target.value)}
        onKeyDown={e => handleKeyDown(e)}
      />
    </div>
  );
}

export default BookFilter;