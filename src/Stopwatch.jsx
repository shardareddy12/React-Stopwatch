export default function Stopwatch({start,stop,reset,isRunning}){
    return (
        <div>
            {/* Runs effect based on the isRunning state. */}
            {!isRunning ? 
                <button onClick={start}>Start</button> :
                <button onClick={stop}>Stop</button>}
            <button onClick={reset}>Reset</button>
        </div>
    )
}