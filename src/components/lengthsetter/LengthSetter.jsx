import React, { useEffect, useRef } from 'react'

import './lengthsetter.css';

const LengthSetter = ({length,setLength}) => {

  const rangeRef = useRef();

  useEffect(()=>{
    
    rangeRef.current.min=4;
    rangeRef.current.defaultValue=4;
    rangeRef.current.max=64;
    console.log(rangeRef.current.min,rangeRef.current.max);
  },[]);

  const handleSlider = ()=>{

    setLength(rangeRef.current.value);
    console.log(length);
  }

  return (
    <div className='length-setter'>
      <div className="length-setter-wrapper">
          <div className='len'>
            <span className='len-title'>LENGTH:</span> 
            <span className='len-val'>{length}</span>
          </div>
          <div className='length-range-container'>
            <span className='initial-length'>4</span>
            <input className='range' type='range' ref={rangeRef} onChange={handleSlider}/>
            <span className='final-length'>64</span>
          </div>
      </div>
    </div>
  )
}

export default LengthSetter;