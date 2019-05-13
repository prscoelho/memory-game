import React from 'react';

const Square = ({ click, completed, selected, children}) => {
  let className = "memory-grid-item";

  if(completed){
    className += "-completed";
  } else if (selected) {
    className += "-selected";
  }

  const onClick = () => {
    if(! completed) {
      click();
    }
  }

  return (
    <div className={className} onClick={onClick}>
      <div className={completed || selected ? "show" : "hide"} >
        {children}
      </div>
    </div>
  );
}

export default Square;