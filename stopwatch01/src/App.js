import logo from './logo.svg';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
        const [runningState, setRunningState] = useState(false);
        const timerId = useRef();

        const startHandler = () =>{
          setRunningState(!runningState);
          if(!runningState){
            console.log(runningState);
              timerId.current = setInterval(()=>{
                setTime(time => time+1);
            },1000);
          }
          else
          {
            clearInterval(timerId.current);
          }
          
        }

  const resetHandler = ()=>{
    clearInterval(timerId.current);
    setTime(0);
  }
  return (
    <>
      <p>{time}</p>
      <button onClick={startHandler}>{runningState ? 'Pause' : 'Start'}</button>
      <button onClick={resetHandler}>Reset</button>
    </>
  );
}

export default App;
