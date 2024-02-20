'use client'
import React, { useState } from 'react'
import { analizar } from '../module/generator'

export default function HomePage() {
  const [results, setResults] = useState('');

  function iniciar(e) {
    e.preventDefault();
    const resArray = []

    // const temp = analizar(`go {
    //   says number a;
    //   says number b;
    //   says number c;
    //   says number d;
    //   };`);
    
    const temp = analizar(`go {
      says number total;
      says number iva;
      says number isr;
      says number impuestos;
      };`
    );

    console.log(temp);

    resArray.push(temp);

    // temp.forEach(item => {
      //   // resArray.push('Resultado: ' + item.toString() + ' ');
      //   resArray.push(item);
    // });

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