import React,{useState} from 'react'


import './toggle.css';

const Toggle = ({title,setLowerCase,setUpperCase,setNumber,setSymbol}) => {
  const [on,setOn] = useState(true);
  const [toggleClass,setToggleClass] = useState('toggle-button-outer-on');
  
  const setOption = ()=>{
     
    if(title.includes('Uppercase')){
      setUpperCase(!on);
    }

    if(title.includes('Lowercase')){
      setLowerCase(!on);
    }

    if(title.includes('Numbers')){
      setNumber(!on);
    }

    if(title.includes('Symbols')){
      setSymbol(!on);
    }

  }
  const toggle = ()=>{

    // On or Off the knob
    if(on){
      // Turn off the knob
      setOption();
      setOn(false);
      setToggleClass('toggle-button-outer-off');
      
     

    }else{
      setOption();
      setOn(true);
      setToggleClass('toggle-button-outer-on');
    }
  }
  return (
    <div className='toggle'>
      <div className='toggle-wrapper'>
          <div className='toggle-container' onClick={toggle}>
            <div className={`toggle-area${on?'':'-off'}`}></div>
            <div className={toggleClass}>
              <div className='toggle-button-inner'></div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Toggle;