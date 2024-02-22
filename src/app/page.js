'use client'
import React, { useState } from 'react'
import { analizar } from '../module/generator'

export default function HomePage() {
  const [results, setResults] = useState('');

  function iniciar(e) {
    e.preventDefault();
    const resArray = []
    
    const temp = analizar(`go {
      says number total;
      says number total;
      says number impuestos
      says number 12+33;
      says number wqqqqq = (30/2)-2;
      says number vegetta = 7;
      says number oaisdha;
      says number pp + i;
      };`
    );
    

    const entries = Array.from(temp.entries())
    entries.forEach(item => {
        resArray.push(`Variable ID: ${item[0]} con valor ${item[1]} \n`);
    });

    setResults(resArray)

  }

  return (
    <div className="card-container">
      <div className='card-header'>
        <h2>Automatas II</h2>
      </div>
      <div className="card-content">
        <h4>Este es un Home page para probar el flujo de informacion</h4>
           <form onSubmit={iniciar}>
              <button className='base-button'>Boton</button>
           </form>
           <div>
              {results}
           </div>
      </div>
    </div>
  );
}