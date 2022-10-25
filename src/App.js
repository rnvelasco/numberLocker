import { useState } from 'react';
import './App.css';

function CalcDisplay({display}) {
  return (
    <div className="calcDisplay">
      {display}
    </div>
  );
}

function CalcButton({value, onClick}) {
  return (
    <button className="calcButton" onClick={onClick}>
      {value}
    </button>
  );
}

function App() {
  
  const [num, setNum] = useState(0);
  const [disp, setDisp] = useState("ENTER CODE");

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
      if (num === 0) {
        setNum(value)
        setDisp(value);
      } else {
        setNum(num+value)
        setDisp(num+value);
      }
    console.log(num.length);
    console.log(num +'|'+ disp);
  };

  const enterClickHandler = () => {    
    if(num == "1234567890") {
      setDisp("OPEN");
    } else {
      setDisp("LOCKED");
    }

    setNum(0);
    console.log(num +'|'+ disp);    
  };

  const clearClickHandler = () => {
    setNum(0);
    setDisp("ENTER CODE");

    console.log(num +'|'+ disp);
  };

  return ( 
    <div className="calcContainer">
      <CalcDisplay display={disp}/>
      <div className="calcButtonsContainer">
        <CalcButton value="7" onClick={numberClickHandler}/>
        <CalcButton value="8" onClick={numberClickHandler}/>
        <CalcButton value="9" onClick={numberClickHandler}/>
        <CalcButton value="4" onClick={numberClickHandler}/>
        <CalcButton value="5" onClick={numberClickHandler}/>
        <CalcButton value="6" onClick={numberClickHandler}/>
        <CalcButton value="1" onClick={numberClickHandler}/>
        <CalcButton value="2" onClick={numberClickHandler}/>
        <CalcButton value="3" onClick={numberClickHandler}/>
        <CalcButton value="Reset" onClick={clearClickHandler}/>
        <CalcButton value="0" onClick={numberClickHandler}/>
        <CalcButton value="Enter" onClick={enterClickHandler}/>
      </div>  
    </div>  
  );
}

export default App;
