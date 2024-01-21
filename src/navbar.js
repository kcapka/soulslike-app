import React, {useState} from 'react';
import coinImage from "./imgs/coin-icon.png";
import navStyle from "./nav.css";
import skull from "./imgs/skull.png"

export default function NavBar(props) {


    return (
        <nav>
            <div className="logo">
                <img src={skull} />
                <p>The Fell Beast</p>
            </div>
            <div className="coin-section">
                <img src={coinImage} />
                <p>{props.coin}</p>
            </div>
        </nav>
    )

}