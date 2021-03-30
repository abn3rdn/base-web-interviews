import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const Repetitions = ({count, times}) => {
    const countRef = useRef(null);

    useEffect(() => {
        if (!count) {
            return;
        }

        countRef.current.style.color = !times ? 'red' : '';  
    });

    return (
        <div className="repetitions">
          <div ref={countRef}>Count: {count}</div>
          {times === 0 && <div>Reset!</div>}
        </div>
    );

}

const App = () => {
    const [interval, setStateInterval] = useState(null);
    const [count, setCount] = useState(0);
    const [times, setTimes] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => updateData(), 1000);
        setStateInterval(interval);
            
        return () => clearInterval(interval);
    }, [times]);

    const updateData = () => {
      if (times >= 5) {
        setCount(count + 1);
        setTimes(0);
      } else {
          setTimes(times + 1);
      }
      console.log('t', interval, count, times);
    }

    return (
    <div className="App">
      <Repetitions count={count} times={times} />
    </div>
    );
}

export default App;
