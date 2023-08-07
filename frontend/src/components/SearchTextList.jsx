import React from 'react';

function SearchTextList({ searchTexts, onSearchTextClick }) {
  return (
    <div>
      <h2 className='mt-4 mb-4'>All Products</h2>
      <ul>
        {searchTexts.map((searchText, index) => (
          <li className="text-blue-500 mb-4" key={index} onClick={() => onSearchTextClick(searchText)}>
            <button>{searchText}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchTextList;
