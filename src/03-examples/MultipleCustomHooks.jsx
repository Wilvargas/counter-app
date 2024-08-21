import React from 'react'
import { useCounter, useFetch } from '../hooks'
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';


export const MultipleCustomHooks = () => {

  const { counter, decrement, increment }= useCounter(1);
  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);
  
  //  // Verificar que los datos existan antes de usarlos
  //  const { name, sprites } = data || {}; // Desestructuramos sólo si 'data' no es null


return (
    <>
    
        <h1>Información de Pokemón</h1>
        <hr />


        { 

        
          isLoading
          ? <LoadingMessage /> 
          : (
            
            <PokemonCard 
            id={ counter } 
            name={ data.name }
            
            sprites={[
              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.back_shiny,
              data.sprites.back_shiny,
            ]}
            />
          )
        }

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

