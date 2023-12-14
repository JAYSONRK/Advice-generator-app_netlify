import React, { useState } from "react";
import DividerM from "./images/pattern-divider-mobile.svg";
import DividerD from "./images/pattern-divider-desktop.svg"
import Icon from "./images/icon-dice.svg";

const AdviceGenerator = () => {
    const [userAdvice, setAdvice] = useState('Advice is Loading...');
    const [adviceId, setId] = useState('');
    
    const advice = async () => {
            try {
                const data = await fetch('https://api.adviceslip.com/advice', { cache: "no-cache" });
            const outputData = await data.json();
            setAdvice(outputData.slip.advice) ;
            setId(outputData.slip.id);
        }catch(err){console.log(`The error is ${err}`)}
    }
    // The { cache: "no-cache" } option is used to ensure that the request is not served from the browser cache.

    return (<>
        <main className="card">
            <h6>Advice #{adviceId}</h6>
            <article className="advice">
                <p>"{userAdvice}"</p>
            </article>
            <picture>
                <source media="(min-width:640px)" srcSet={DividerD}/>
                <img src={DividerM} alt="divider"/>
            </picture>
            <div className="dice">
            <button onClick={advice}><img src={Icon} alt="icon"/></button>
            </div> 
        </main>  
    </>)
}

export default AdviceGenerator;