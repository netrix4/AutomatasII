'use client'
import React, { useState } from 'react'
import { analizar } from './module/generator'

const HomePage = () => {
  const [results, setResults] = useState('');

  function iniciar(e) {
    e.preventDefault();
    const resArray = []

    const temp = analizar(`a = 10 - 30
    b = 20
    c = 10
    d = a + b + c
    total = (a+b) * (c/d)
    `)

    console.log(temp);

    temp.forEach(item => {
      resArray.push('Resultado: ' + item.toString() + ' ')
    });

    setResults(resArray)

  }
  return (
    <div className='main-div'>
      <div className='content'>
        Este es un Home page para probar el flujo de informacion
        <form onSubmit={iniciar}>
        <button>Boton</button>
        </form>
        <div>
          {results}
        </div>
      </div>
    </div>
  )
}

export default HomePage
