'use client'
import React, { useState } from 'react'
import { analizar } from '../module/generator'

export default function HomePage() {
  const [inputUser, setInputUser] = useState(`go{\n\n};`);
  const [results, setResults] = useState('');
  // const [linesInputUser, setlinesInputUser] = useState('');
  const lineNum = [];
  let contador = 1;
    
  while(contador < 27){
    lineNum.push(`${contador.toString()}\n`);
    contador++;
  }

  const onTextInputChange = (event) =>{
    setInputUser(event.target.value);

    // console.log(event.target.value.match(/[\r\n]+/g));
    // const numONewLines = event.target.value.match(/[\r\n]+/g)?.length;
    // const lineNum = [];
    // let contador = 1;
    // console.log(numONewLines)
    
    // while(contador < numONewLines){
    //   lineNum.push(`${contador.toString()}\n`);
    //   contador++;
    // }
    // setlinesInputUser(lineNum);
  }

  function onCompileClick(e) {
    e.preventDefault();
    const resArray = []
    
    // const entrada = `go {
    //   says number total;
    //   says number total;
    //   says number impuestos
    //   says number 12+33;
    //   says number wqqqqq = (30/2)-2;
    //   says number vegetta = 7;
    //   says number oaisdha;
    //   says number pp + i;
    //   };`;

    const temp = analizar(inputUser);

    const entries = Array.from(temp.entries())
    entries.forEach(item => {
        resArray.push(`Variable ID: ${item[0]} con valor ${item[1]} \n`);
    });

    setResults(resArray)

  }

  return (
    <div className='card-element-wrapper'>
      <div className='card-element-header'>
        <h2>Compilador Online</h2>
      </div>
      <div className='card-element-content' id="cardContent">
        <p htmlFor="inputAutom">Ingresa tu código fuente en GoScript y haz click en el botón para compilar</p>
        <div className='input-container' id = 'inputContainer'>
          {/* <pre>{linesInputUser}</pre> */}
          <pre>{lineNum}</pre>
          <textarea id="inputText" value={inputUser} onChange={onTextInputChange}></textarea>
        </div>
        <button id="compile" onClick={onCompileClick}>Compilar</button>
        <p >{results}</p>
      </div>
    </div>
  );
}