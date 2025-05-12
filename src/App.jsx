import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import Stopwatch from './Stopwatch'

function App() {

  const [time,setTime] = useState(0)
  const [isRunning, setIsrunning] = useState(false)

  // useEffect to update time when isRunning is true.
  useEffect(()=>{
    let timer;
    if(isRunning){
      timer = setInterval(()=> {setTime((prevtime)=>prevtime+1)},1000)
    } else {
      clearInterval(timer)
    }
    return ()=> clearInterval(timer)
  },[isRunning])

  // useCallback Memoizes the start, stop, and reset functions to avoid unnecessary re-renders.
  const start = useCallback(()=>setIsrunning(true),[])
  const stop = useCallback(()=>setIsrunning(false),[])
  const reset = useCallback(()=> {setTime(0),setIsrunning(false)},[])

  // Used for optimizing calculations related to formatted time.
  const formattedTime = useMemo(()=>{
    const minute = Math.floor(time/60);
    const seconds = time%60 ;
    return `${minute}:${seconds<10?'0':''}${seconds}`
  },[time])

  return (
    <div>
      <h1>StopWatch</h1>
      <p>{formattedTime}</p>
      <Stopwatch start={start} stop={stop} reset={reset} isRunning={isRunning}/>
    </div>
  )
}

export default App
