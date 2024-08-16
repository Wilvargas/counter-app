import React from 'react'
import { useCounter, useFetch } from '../hooks'


export const MultipleCustomHooks = () => {

  const { counter, decrement, increment }= useCounter(1);
  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);
  
  

return (
    <>
    
        <h1>Información de Pokemon</h1>
        <hr />

        { isLoading && <p>Cargando...</p> }

        <h2>{ data?.name }</h2>

        <button
          className='btn btn-primary mt-2'
          onClick={ () => counter > 1 ? decrement() : null }
        >
          Anterior
        </button>


        <button
          className='btn btn-primary mt-2'
          onClick={ () => increment() }
        >
          Siguiente
        </button>
    </>
  )
}

