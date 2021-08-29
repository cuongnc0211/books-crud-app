import React from 'react';
// here we can initialise with any value we want.
const BookContext = React.createContext({
  page: 1,
  setPage: (pageNum) => {},
  searchKeyword: '',
  setSearchKeyword: (keyword) => {},
});

export const BookProvider = BookContext.Provider;
export const BookConsumer = BookContext.Consumer;
export default BookContext;