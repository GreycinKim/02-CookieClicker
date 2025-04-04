import { useState, useEffect } from 'react'
import cookie from './assets/Cookie.png'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [basePower, setPower] = useState(1)

    const resetCount = () => {
        setCount(0);
        setPower(1);
    };

    // Power-up when score reaches 25
    useEffect(() => {
        if (count >= 25 && basePower === 1) {
            setPower(2);
        }
    }, [count, basePower]);

    const handleClick = () => {
        setCount(prev => prev + basePower);
    };

    return (
        <>
            <h1>Cookie POWER: {basePower}x</h1>
            <h2>Click ME!!!</h2>

            <div>
                <button onClick = {handleClick}>
                    <img src={cookie} className="logo react" alt="Cookie Image" />
                </button>
            </div>

            <h2>Score: {count}</h2>
            <button onClick={resetCount}>Reset</button>

    </>
  )
}

export default App
