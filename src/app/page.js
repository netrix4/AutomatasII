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

    // a = 10 - 30
    // b = 20
    // c = 10
    // d = a + b + c

    // total = (a+b) * (c/d)
    
    temp.forEach(item => {
      // console.log('Elementos: ', item, typeof item)
      if (typeof item === typeof 0 ) {
        resArray.push(item.toString() + ', ')
      }
      else{
        console.log(typeof item)
        resArray.push(item)
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
