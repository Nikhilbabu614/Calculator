import './App.css';
import React, { useState } from 'react';

function App() {


  const [ip, setip] = useState("");
  const [ele, setele] = useState();
  var result = 0;

  function click(event) {
    const val = event.target.getAttribute("value");
    setip((prev) => {
      return prev.concat(val);
    });
  }

  function submit() {

    setip((data) => {
      for(var i=0;i<data.length;i++)
      {
        if(data[i] == "+")
        {
          result = parseInt(data[i-1])+ parseInt(data[i+1]);
        }else if(data[i] == "-"){
          result = parseInt(data[i-1]) - parseInt(data[i+1]);
        }else if(data[i] == "x"){
          result = parseInt(data[i-1]) * parseInt(data[i+1]);
        }else if(data[i] == "/"){
          result = parseInt(data[i-1]) / parseInt(data[i+1]);
        }
      }
      setele((prev) => {
        return result;
      });
    });
    setip("");
  }

  function clear() {
    setip("");
    setele("");
  }

  return (
    <div>
      <div className="App">
        <h1>{ip} {ele}</h1>
        <div className="box">
          <div className="item item3" onClick={clear} value="AC">AC</div>
          <div className="item item3" onClick={click} value="clear">clear</div>
          <div className="item item3" onClick={click} value="%">%</div>
          <div className="item item2" onClick={click} value="/">/</div>
          <div className="item" onClick={click} value="7">7</div>
          <div className="item" onClick={click} value="8">8</div>
          <div className="item" onClick={click} value="9">9</div>
          <div className="item item2" onClick={click} value="x">x</div>
          <div className="item" onClick={click} value="4">4</div>
          <div className="item" onClick={click} value="5">5</div>
          <div className="item" onClick={click} value="6">6</div>
          <div className="item item2" onClick={click} value="-">-</div>
          <div className="item" onClick={click} value="1">1</div>
          <div className="item" onClick={click} value="2">2</div>
          <div className="item" onClick={click} value="3">3</div>
          <div className="item item2" onClick={click} value="+">+</div>
          <div className="item item1" onClick={click} value="0">0</div>
          <div className="item " onClick={click} value=".">.</div>
          <div className="item item2" onClick={submit}>=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
