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
    const responses = analizar(inputWithNoComments);
    let preAnalizedResponse = inputAnalizer.preAnalize(inputWithNoComments);
    
    responses.errors.forEach(ANTLRerror => {
      preAnalizedResponse += ANTLRerror.error_msg;
    });

    // if (preAnalizedResponse === '') {
    if (preAnalizedResponse === '' && !responses?.errors[0]) {

      const entries = Array.from(responses.temp.entries());
  
      entries?.forEach(item => {
        resArray.push(`Variable ID: '${item[0]}' con valor ${item[1]}\n`);
      });
      setResults(resArray);
    }
    else{
      setResults(preAnalizedResponse);
      console.error('Arregla tus missinputs para continuar');
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
          <pre className='code-lines-counter'>{linesInputUser}</pre>
          <textarea id="inputText" value={inputUser} onChange={onTextInputChange}></textarea>
        </div>
        <button id="compile" onClick={onCompileClick}>Compilar</button>
        <pre className='compiling-feedback'>{results}</pre>
      </div>
    </div>
  );
}