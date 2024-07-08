/* eslint-disable react/static-property-placement */
import React from 'react';

const App = ({
  text = '',
  dispatch,
  updateText,
  resetText,
}) => {
  const handleChange = (e) => {
    dispatch(updateText(e.target.value));
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(resetText());
  };

  return (
    <div>
      <form>
        <input type="text" value={text} onChange={handleChange} />
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
      {text && <div>{text}</div>}
    </div>
  );
};

export default App;
