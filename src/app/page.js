'use client'
import React, { useState } from 'react'
import { analizar } from '../module/generator'

export default function HomePage() {
  const [inputUser, setInputUser] = useState('');
  const [results, setResults] = useState('');

  const onTextInputChange = (event) =>{
    setInputUser(event.target.value);
    
  }

  function onCompileClick(e) {
    e.preventDefault();
    const resArray = []
    
    const entrada = `go {
      says number total;
      says number total;
      says number impuestos
      says number 12+33;
      says number wqqqqq = (30/2)-2;
      says number vegetta = 7;
      says number oaisdha;
      says number pp + i;
      };`;

    const temp = analizar(inputUser);

    const entries = Array.from(temp.entries())
    entries.forEach(item => {
        resArray.push(`Variable ID: ${item[0]} con valor ${item[1]} \n`);
    });

    setResults(resArray)

  }

  return (
    // <div className="card-container">
    //   <div className='card-header'>
    //     <h2>Automatas II</h2>
    //   </div>
    //   <div className="card-content">
    //     <h4>Este es un Home page para probar el flujo de informacion</h4>
    //        <form onSubmit={iniciar}>
    //           <button className='base-button'>Boton</button>
    //        </form>
    //        <div>
    //           {results}
    //        </div>
    //   </div>
    // </div>

    <div className='card-element-wrapper'>
      <div className='card-element-header'>
        <h2>Compilador Online</h2>
      </div>
      <div className='card-element-content' id="cardContent">
        <p htmlFor="inputAutom">Ingresa tu codigo fuente en GoScript y haz click en el botón para compilar</p>
        <textarea id="inputText" value={inputUser} onChange={onTextInputChange}></textarea>
        <button id="compile" onClick={onCompileClick}>Compilar</button>
        <p >{results}</p>
      </div>
    </div>
  );
}