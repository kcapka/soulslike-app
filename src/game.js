import React, {useState} from 'react';
import NavBar from "./navbar";
import enemy1 from "./imgs/skeleton-enemy.webp";
import "./game.css";
import Popup from "./defeated";
import Shop from './shop';
import sword from "./imgs/sword-cursor.png";
import axe from "./imgs/axe-cursor.png";

/* 
Todo:
- Create enemy array of enemy objects. Include damage amount and amount of coin to receive upon defeat.
    -Find out how to implement damage and reward as variables into functions
    -Figure out how to Cycle through enemies on defeat
- Create weapon choices. Creat weapon array of weapon objects that deal different damage and may be purchased.
*/

// WORK ON CLICKING SELECTED WEAPON AND DEALING CORRECT DAMAGE


const weapons = [
    {
        id: Math.random(),
        name: "Sword",
        src: sword,
        damage: 62,
        price: 100
},
    {
    id: Math.random(),
    name: "Axe",
    src: axe,
    damage: 115,
    price: 1000
}
];


export default function Game() {

    // Coin count, enemy health, and "defeated popup trigger"
    const [coinCount, setCoinCount] = useState(0);
    const [enemyHealth, setEnemyHealth] = useState(500);
    const [trigger, setTrigger] = useState(false);
    const [myWeapons, setMyWeapons] = useState([weapons[0]]);
    const [currentWeapon, setCurrentWeapon] = useState(myWeapons[0].damage);

    //enemy object
    let skeletor = {src: enemy1, health: enemyHealth};
    
    //handling damage put on enemy. Add damage amt to weapon?
    function handleDamage() {
        setEnemyHealth(prevEnemyHealth => prevEnemyHealth - currentWeapon);
    }

    const healthSection = !trigger ? `Health: ${skeletor.health}/500` : '';

    // adding coin for defeating enemy and triggering popup
    if (enemyHealth <= 0) {
        setCoinCount(prevCoinCount => prevCoinCount + 112);
        setEnemyHealth(500);
        setTrigger(true);
    }

    //resetting enemy
    function handleResetEnemy() {
        setTrigger(false);
    }
    const showReset = trigger ? "Reset Enemy" : '';

    // purchase prop to receive feedback from Shop component
    function handlePurchase(price) {
        setCoinCount(price);
    }

    function handleWeaponSelection(damage) {
        setCurrentWeapon(damage);
        console.log(currentWeapon);
    }

    function handleWeaponPurchase(item) {
        setMyWeapons(item);
    }

    
    
    

    return (
        <>
            <NavBar coin={coinCount} />
            <h1>Welcome to <span>The Fell Beast</span>! Use your weapon to defeat the enemy and gain coins.</h1>
            <div className="weapon-inventory">
                <h4>My Weapons</h4>
                <div>
                    {myWeapons.map((item) => (
                        <div className="item" key={item.id} onClick={() => handleWeaponSelection(item.damage)}>
                            <img src={item.src} />
                            <p>{item.name}</p>
                        </div>
                ) )}
                </div>
            </div>
            <div className="main-cont">
            <div className="enemies">
                <p>Skeletal Mouthbreather</p>
                <img src={skeletor.src} onClick={handleDamage} />
                <p>{healthSection}</p>
            </div>
            <Popup trigger={trigger} />
            <div className="reset-container">
                <button onClick={handleResetEnemy} className="reset">{showReset}</button>
            </div>
            <Shop purchase= {handlePurchase} weaponPurchase ={handleWeaponPurchase} coin={coinCount}/>
            </div>
        
        </>
    )
}

