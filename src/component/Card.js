import React from 'react';
import styles from "../style/card.module.css"

const Card = (props) => {
    const{name,symbol,image,currentPrice,marketCap,percentChange}=props
    return (
        
                
        <section>
            <div className={styles.container}>
                <span><img src={image} alt="pic coin"></img></span>
                <span><p>{name}</p></span>
                <span><p>{symbol.toUpperCase()}</p></span>
                <span><p>{currentPrice.toLocaleString()}$</p></span>
                <span><p>{marketCap.toLocaleString()} $</p></span>
                <span><p>{percentChange.toFixed(2)}%</p></span>
            </div>
        </section>
    );
};

export default Card;