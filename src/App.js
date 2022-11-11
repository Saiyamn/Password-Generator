import React,{useState} from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';


import './app.css';
import LengthSetter from './components/lengthsetter/LengthSetter';
import Options from './components/passwordoptions/Options';

const App = ()=>{
  const [length,setLength] = useState(4);
  const [upperCase,setUpperCase] = useState(true);
  const [lowerCase,setLowerCase] = useState(true);
  const [number,setNumber] = useState(true);
  const [symbol,setSymbol] = useState(true);
  const [password,setPassword] = useState('');
  const [copied,setCopied] = useState(false);
  

  const getLowerCaseChar = ()=>{

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const n = alphabet.length;
    
    // return alphabet[Math.floor(Math.random() * alphabet.length)]
    return alphabet[Math.floor(Math.random()*n)];
  }
  
  const getUpperCaseChar = ()=>{

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const n = alphabet.length;
    
    // return alphabet[Math.floor(Math.random() * alphabet.length)]
    return alphabet[Math.floor(Math.random()*n)];
  }

  const getNumber = ()=>{

    const num = '0123456789';
    const n = num.length;
    
    // return alphabet[Math.floor(Math.random() * alphabet.length)]
    return num[Math.floor(Math.random()*n)];
  }

  const getSymbol = ()=>{

    const symbol = '!@#$%^&*()-+=~|?<.,>';
    const n = symbol.length;
    
    // return alphabet[Math.floor(Math.random() * alphabet.length)]
    return symbol[Math.floor(Math.random()*n)];
  }


  // Need password length and selected options to generate password
  const generatePassword = ()=>{
    
    const options = [];
    let currPassword='';
    setPassword('');
    // based on selected options add functions to the array

    if(upperCase){
      options.push(getUpperCaseChar);
    }

    if(lowerCase){
      options.push(getLowerCaseChar);
    }

    if(number){
      options.push(getNumber);
    }

    if(symbol){
      options.push(getSymbol);
    }
    
    const n = length;
    let i=1,j=0;
   
    while(i<=n){
      
       if(j===options.length){
        j=0;
       }

       currPassword+=options[j]();
       j++;
       i++;
    }
    // Set the generatedPassword
    
    setPassword(currPassword);
    


  }

  const copyToClipboard = ()=>{
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 600);
    
  }

  const CopiedIcon =()=>{

    return (
        <div className='copied-icon'>
          <CheckIcon fontSize='small'/>
        </div>
    );
  }

  return(
    <div className='app'>
      <div className='password-generator-wrapper'>
        <div className='password-generator'>
          <h1 className='title'>PASSWORD GENERATOR</h1>
           <div className='password-length-setter'>
             <LengthSetter length={length} setLength={setLength}/>
           </div>
           <div className='password-options-selector'>
              <p className='settings'>settings</p>
              <Options title={'Include Uppercase'} setUpperCase={setUpperCase} setLowerCase={setLowerCase} setNumber={setNumber} setSymbol={setSymbol}/>
              <Options title={'Include Lowercase'} setUpperCase={setUpperCase} setLowerCase={setLowerCase} setNumber={setNumber} setSymbol={setSymbol}/>
              <Options title={'Include Numbers'} setUpperCase={setUpperCase} setLowerCase={setLowerCase} setNumber={setNumber} setSymbol={setSymbol}/>
              <Options title={'Include Symbols'} setUpperCase={setUpperCase} setLowerCase={setLowerCase} setNumber={setNumber} setSymbol={setSymbol}/>
           </div>
           <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
           <div className='password-display-section'>
              <div className='password-display'>{password}</div>
              {copied ? <CopiedIcon/> :<ContentCopyIcon onClick={copyToClipboard}className='password-copy-icon'/>}     
           </div>
        </div>
      </div>
    </div>
  );
}


export default App;