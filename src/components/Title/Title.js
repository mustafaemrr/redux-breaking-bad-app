import React from 'react';
import './Title.scss';

function Title({title, subtitle}) {
  return (
    <div className='title-wrapper'>
      <h1 className='title'>{title}</h1>
      <h2 className='subtitle'>{subtitle}</h2>
    </div>  
  );
}

export default Title;
