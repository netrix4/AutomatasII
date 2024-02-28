'use client'
import React, { useState } from 'react';
import { analizar } from '../module/generator';
import InputFormater from '../helper/InputFormater';
import InputAnalizer from "../helper/InputAnalizer";

export default function HomePage() {
  const [inputUser, setInputUser] = useState(`go{\n\n};`);
  const [results, setResults] = useState('');
  const [linesInputUser, setLinesInputUser] = useState(['1\n','2\n','3\n']);

  const inputFormater = new InputFormater();
  const inputAnalizer = new InputAnalizer();

  const onTextInputChange = (event) =>{
    // event.preventDefault();
    setInputUser(event.target.value);
    const numberOfLines = inputAnalizer.countInstructionsRows(inputUser);

    if (numberOfLines.length>3) {
      setLinesInputUser(numberOfLines);      
    }
    else{
      setLinesInputUser(['1\n','2\n','3\n']);
    }
  }

  function onCompileClick(event) {
    event.preventDefault();
    console.clear();
    const resArray = [];
    const inputWithNoComments = inputFormater.ignoreComments(inputUser);
    const preAnalizedResponse = inputAnalizer.preAnalize(inputWithNoComments); //<-

    if (preAnalizedResponse === '') {
      const responses = analizar(inputWithNoComments);
      const entries = Array.from(responses.entries());
  
      entries?.forEach(item => {
          resArray.push(`Variable ID: '${item[0]}' con valor ${item[1]} \n`);
      });
  
      setResults(resArray);
      
    }
    else{
      setResults(preAnalizedResponse)
      console.error('Arregla tus misinputs para continuar');
    }

  }

  return (
    <div className='card-element-wrapper'>
      <div className='card-element-header'>
        <h2>Compilador Online</h2>
      </div>
      <div className='card-element-content' id="cardContent">
        <p htmlFor="inputAutom">Ingresa tu código fuente en GoScript y haz click en el botón para compilar</p>
        <div className='input-container' id = 'inputContainer'>
          <pre>{linesInputUser}</pre>
          <textarea id="inputText" value={inputUser} onChange={onTextInputChange}></textarea>
        </div>
        <button id="compile" onClick={onCompileClick}>Compilar</button>
        <pre>{results}</pre>
      </div>
    </div>
  );
}