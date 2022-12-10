import React,{useEffect , useState} from 'react';
import axios from "axios"
import Card from './Card';
import styles from "../style/lander.module.css";
const Lander = () => {
    const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"

    const [data, setData]=useState([])
    const [input, setInput]=useState("")
    
    useEffect(()=>{
        
        axios.get(url)
        .then(Response=>setData(Response.data))
        


    },[])




    const inputHandler=(event)=>{
        setInput(event.target.value)
    }

    const filterCoins=data.filter(item=>item.name.toLowerCase().includes(input.toLowerCase()))

    return (
        <>
            <div className={styles.input1}>
                <input value={input} onChange={inputHandler} ></input>
                
            </div>
            <section>
                {data.length?<div className={styles.cardContainer}>
                    <div className={styles.header}><span>image</span><span>name</span><span>symbole</span><span>price</span><span>marketCap</span><span>present change</span></div>
                    {filterCoins.map(item=>< Card key={item.name} name={item.name} symbol={item.symbol} image={item.image} currentPrice={item.current_price} marketCap={item.market_cap} percentChange={item.price_change_percentage_24h}/>)}
                </div>:
                <div><h1>LOADING ......</h1></div>}
                
            </section>
        </>
    );
};

export default Lander;