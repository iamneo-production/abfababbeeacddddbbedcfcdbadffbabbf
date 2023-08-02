import { useState, useRef, React } from "react";
import '../../App.css';


export default function Stopwatch(props){


    const [time, setTime] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const increment = useRef(null)


    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);

        increment.current = setInterval(() => {
          setTime((time) => time + 1000)}, 1000)
    };


    const handlePause = () => {
      clearInterval(increment.current)
      setIsPaused(!isPaused);
    };

    const handleResume = () => {
      setIsPaused(!isPaused);
      increment.current = setInterval(() => {
        setTime((time) => time + 1000)}, 1000)
    };
  
    const handleReset = () => {
     clearInterval(increment.current)
      setIsActive(false)
      setIsPaused(false)
      setTime(0)
    };

    return(
        <section className='stop-watch'>
            <div className='inner' >
            <h1> React Stopwatch </h1>

            <p className='timer' id='time' data-testid='time'>{`0${Math.floor(time % 360000)}`.slice(-2)} : {`0${Math.floor(time/60000) % 60}`.slice(-2)} : {`0${Math.floor(time/1000) % 60}`.slice(-2)} </p>

            <div className='Control-Buttons'>
            
            {
            !isActive && !isPaused ?
              <button className='btn' onClick={handleStart} data-testid='start'>Start</button>
              : (
                !isPaused ? <button className='btn' data-testid='pause' onClick={handlePause}>Pause</button> :  <button className='btn' data-testid='resume' onClick={handleResume}>Resume</button>
              )
            }

          <button className='btn' id='reset' data-testid='reset' onClick={handleReset} disabled={!isActive}>Reset</button>
        </div>
        </div>

        </section>
    );
}