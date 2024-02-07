'use client'
import React from 'react'
import { analizar } from './module/generator'
// import CustomVisitor from './helper/CustomVisitor'

const HomePage = () => {
  function iniciar(e) {
    e.preventDefault();
    analizar(`{1}`)
  }
  return (
    <div>
      Este es un Home page para probar el flujo de informacion
      <form onSubmit={iniciar}>
      <button>Boton</button>
      </form>
    </div>
  )
}

export default HomePage
