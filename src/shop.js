import React, {useState} from 'react';
import "./shop.css";
import map from "./imgs/map.png";
import key from "./imgs/key-icon.png";
import tools from "./imgs/tools-icon.png";
import book from "./imgs/book-icon.png";


const shopItems = [
    {
        id: "map",
        src: map,
        name: "Map",
        price: 200
    },
    {
        id: "key",
        src: key,
        name: "Key",
        price: 100
    },
    {
        id: "tools",
        src: tools,
        name: "Tools",
        price: 150
    },
    {
        id: "book",
        src: book,
        name: "Book of Undead",
        price: 500
    }
]

export default function Shop(props) {

    const [purchasedItems, setPurchasedItems] = useState([]);

    function handleAddPurchasedItem(item) {
        setPurchasedItems(prevPurchasedItems => [...prevPurchasedItems, item]);
        
    }

    function buyItem(item) {
        if (props.coin >= item.price) {
             props.purchase(prevCoinCount => prevCoinCount - item.price);
             handleAddPurchasedItem(item);
         } else {
            alert("You do not have enough coins to purchase this item.");
         }
    }

    function handleShowPurchased() {
        document.getElementById("purchased-items").classList.toggle("active");
        document.getElementById("purchased-title").classList.toggle("active");
    }


    return (
        <div className="shop-container">
            <h1>Shop</h1>
            <h2>Use your coins to purchase items below.</h2>
            <div className="item-container">
            {shopItems.map((item) => (
                    <div className="item" key={item.id} onClick={() => buyItem(item)}>
                        <img src={item.src} />
                        <p>{item.name}</p>
                        <p>{item.price} <span>coins</span></p>
                    </div>
            ) )}
            </div>
            <div className="purchased-title" id="purchased-title">
                <p>Purchased</p>
                <div className="purchased-arrow" onClick={handleShowPurchased}>
                    <span className="arrow-line"></span>
                    <span className="arrow-line"></span>
                </div>
            </div>
            <div className="purchased-items" id="purchased-items">
                <h4>Purchased Items</h4>
                {purchasedItems.map((item) => (
                    <div className="purchased-item" key={item.id}>
                        <img src={item.src} />
                    </div>
                ))}
            </div>
        </ div>
        
    )
}

/* {purchasedItems.map((item) => (
                    <div className="item" key={item.id}>
                        <img src={item.src} />
                        <p>{item.name}</p>
                    </div>
                ))} */