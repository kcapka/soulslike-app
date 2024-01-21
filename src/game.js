import React, {useState} from 'react';
import NavBar from "./navbar";
import enemy1 from "./imgs/skeleton-enemy.webp";
import "./game.css";
import Popup from "./defeated";
import Shop from './shop';


export default function Game() {

    const [coinCount, setCoinCount] = useState(0);
    const [enemyHealth, setEnemyHealth] = useState(500);
    const [trigger, setTrigger] = useState(false);

    let skeletor = {src: enemy1, health: enemyHealth};
    
    function handleDamage() {
        setEnemyHealth(prevEnemyHealth => prevEnemyHealth - 62);
    }

    function handleResetEnemy() {
        setTrigger(false);
    }

    function handlePurchase(price) {
        setCoinCount(price);
    }

    const showReset = trigger ? "Reset Enemy" : '';
    

    const healthSection = 
        !trigger ? `Health: ${skeletor.health}/500` : '';

    


    if (enemyHealth <= 0) {
        setCoinCount(prevCoinCount => prevCoinCount + 112);
        setEnemyHealth(500);
        setTrigger(true);
    }
    

    return (
        <>
            <NavBar coin={coinCount} />
            <h1>Welcome to <span>The Fell Beast</span>! Use your weapon to defeat the enemy and gain coins.</h1>
            <div className="enemies">
                <p>Skeletal Mouthbreather</p>
                <img src={skeletor.src} onClick={handleDamage} />
                <p>{healthSection}</p>
            </div>
            <Popup trigger={trigger} />
            <div className="reset-container">
                <button onClick={handleResetEnemy} className="reset">{showReset}</button>
            </div>
            <Shop purchase= {handlePurchase} coin={coinCount}/>
        
        </>
    )
}