import React, { useState, useEffect } from 'react';
import './App.css';
const kek = require('./src/indexEvoli.js');


function App() {
  //let answer = kek(100, .2, 20)
  const [answer, setAnswer] = useState('');
  const [days, setDays] = useState(100);
  const [fillingRate, setFillingRate] = useState(.2);
  const [population, setPopulation] = useState(20);
  function run() {
    setAnswer(kek(days, fillingRate, population))
  }
  return (
    <div className="App">
      <div>
        Days to run :
      <input type="number" placeholder={days} min = "0" onChange={e => setDays(e.target.value)} />
      </div>
      <div>
        Food filling rate :
      <input type="number" placeholder={fillingRate}  max = "1"  min = ".05" onChange={e => setFillingRate(e.target.value)} />
      </div>
      <div>
        Initial population :
      <input type="number" placeholder={population}  min = "1" onChange={e => setPopulation(e.target.value)} />
      </div>
      <div>
        {answer}
      </div>
      <button onClick={run}>
        run
      </button>
    </div>
  );
}

export default App;