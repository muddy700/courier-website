import React from 'react';
import '../styles/HomePage.css'

function MiniTitle({ title }) {
  return (
    <div className='section-mini-title'>
      <h4>{title}</h4>
      <div />
    </div>
  );
}

export default MiniTitle;
