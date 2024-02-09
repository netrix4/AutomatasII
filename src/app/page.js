'use client'
import React, { useState } from 'react'
import { analizar } from './module/generator'

const HomePage = () => {
  const [results, setResults] = useState('');

  function iniciar(e) {
    e.preventDefault();
    const resArray = []
    const temp = analizar(`72+8
    99+1
    a = 16
    palabra = 36
    10-5
    30/3
    55*2
    `)

    temp.forEach(item => {
      console.log('Elementos: ', item, typeof item)
      if (typeof item === typeof 0 ) {
        resArray.push(item.toString() + ', ')
      }
      else{
        resArray.push(item[0].toString() + ', ')
      }
    }); temp

    setResults(resArray)

  }
  return (
    <div>
      Este es un Home page para probar el flujo de informacion
      <form onSubmit={iniciar}>
      <button>Boton</button>
      </form>
      <div>
        {results}
      </div>
    </div>
  )
}

export default HomePage
