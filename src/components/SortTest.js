import React from "react";

const SortTest = (props) => {
  return (
    <div className='sort-tab'>
      <h2>{props.match.params.sortType}</h2>
    </div>
  );
};

export default SortTest;
