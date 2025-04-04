import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import cookie from './assets/Cookie.png'
import './App.css'


function App() {
    const [count, setCount] = useState(0)
    const [basePower, setPower] = useState(1)
    const [showMessage, setShowMessage] = useState(false);

    const resetCount = () => {
        setCount(0);
        setPower(1);
    };

    // When Count is greater than 0 AND count mod 100 = 0 run
    useEffect(() => {
        if (count > 0 && count % 100 === 0) {
            setPower(prev => prev * 2)
            setShowMessage(true) // SHOW message
            setTimeout(() => setShowMessage(false), 2000)
        }
    },[count])

    const handleClick = () => {
        setCount(prev => prev + basePower);
    };

    return (
        <div className="center-wrapper">
            {showMessage && (
                <div className="power-up-overlay">
                    Power Up!
                </div>
            )}

            <Header basePower={basePower} />
            <h2>Score: {count}</h2>

            <div className="cookie-wrapper">
                <button onClick={handleClick}>
                    <img src={cookie} className="logo" alt="Cookie Image" />
                </button>
            </div>

            <button onClick={resetCount}>Reset</button>
        </div>

    )
}

export default App
