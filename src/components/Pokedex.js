'use client';
import React, { useState, useEffect } from 'react';
import PokemonCards from './PokemonCards';
// import PokemonCards from './PokemonCards'

export const Pokedex = ({pokemon}) => {  

  return (
    <div>
        <div className='w-screen flex justify-center my-3'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-4/5">
                {pokemon && pokemon.map((pokemon, index) => (
                    <PokemonCards key={index} pokemon={pokemon} />
                ))}
            </div>
        </div>

    </div>
  )
}
