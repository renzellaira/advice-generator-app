import React from "react";
import { useEffect } from "react";
import './advice.css'
import CardDivider from '../assets/pattern-divider-desktop.svg'
import Dice from '../assets/icon-dice.svg'
import { useState } from "react";


const AdviceCard = () => {

    const [advice, setAdvice] = useState("");
    const fetchData = async () => {
        const url = 'https://api.adviceslip.com/advice';
        try {
            const response = await fetch(url);
            const json = await response.json();
            setAdvice(json.slip)
            console.log(advice)
        } catch (error) {
            console.log('error', error)
        }
    };
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="cardContainer">
            <h1 className='cardTitle'>ADVICE #{advice.id}</h1>
            <div className="cardContent" >"{advice.advice}"</div>
            <img className="divider" src={CardDivider} alt="React Logo" />
            <button className='refreshButton' onClick={() => fetchData()}>
                <img src={Dice} alt="React Logo" />
            </button>
        </div>
    )
}
export default AdviceCard;