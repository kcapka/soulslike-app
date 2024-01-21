import React from 'react';
import "./defeated.css"

export default function Popup(props) {


    return (props.trigger) ? (
        <div className="defeated-container">
            <p className="defeated">Enemy Defeated</p>
        </div>
    ) : "";
}