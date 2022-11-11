import React from 'react'

import './options.css';
import Toggle from '../toggle/Toggle';

const Options = ({title,setLowerCase,setUpperCase,setNumber,setSymbol}) => {
  return (
    <div className='option'>
      <div className='option-wrapper'>
         <div className='option-container'>
            <span className='option-title'>{title}</span>
            <Toggle className='option-toggle' title={title} setUpperCase={setUpperCase} setLowerCase={setLowerCase} setNumber={setNumber} setSymbol={setSymbol}/>
         </div>
      </div>
    </div>
  )
}

export default Options;