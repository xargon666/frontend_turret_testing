import React, { useState, useEffect } from 'react';
import './style.css';

export default function WordsAnim() {
    const [phrase, setPhrase] = useState([]);  
        
    let i = 0; 
    let arr = [];
        
    function handleMessage() {
        let message = ["expect", "('testing')", ".", "toBe", "('fun');"];
        
        setTimeout(() => {
          arr.push(message[i]);
          setPhrase(arr.toString().split(","));

          i++;
          
          if (i < message.length) {
            handleMessage();
          }
        }, 500)
    } 

    useEffect(() => {
        handleMessage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div>
        <p>{phrase}</p>
    </div>
  )
}

