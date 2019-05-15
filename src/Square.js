import React from 'react';

import img0 from './svg/0.svg';
import img1 from './svg/1.svg';
import img2 from './svg/2.svg';
import img3 from './svg/3.svg';
import img4 from './svg/4.svg';
import img5 from './svg/5.svg';
import img6 from './svg/6.svg';
import img7 from './svg/7.svg';

const images = [ img0, img1, img2, img3, img4, img5, img6, img7];

const Square = ({ click, completed, selected, element}) => {
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
    <div className={className} data-cy={element} onClick={onClick}>
      <img src={images[element]} alt="" />
    </div>
  );
}

export default Square;