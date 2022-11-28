import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [counted, setCounted] = useState([0, 1, 2, 3]);

  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  const handlerClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
  };

  return (
    <div className="App">
      <button onClick={handlerClick}>Count {counted.slice(-1)}</button>
      <div
        ref={divRef}
        style={{ height: '100px', width: '100px', overflowY: 'scroll' }}
      >
        {counted.map((c) => {
          return <p key={`c-${c}`}>{c}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
