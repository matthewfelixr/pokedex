import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';

const PokemonCards = ({pokemon,index}) => {
    const router = useRouter();

    const handleCardClick = () => {
      router.push(`/pokemon/${pokemon.id}`);
    };

//   console.log(pokemon.url)
  const [type, setType] = useState([]);
  useEffect(() => {
    const fetchType = async () => {
    const res = await fetch(pokemon.url);
    const data = await res.json();
    console.log(data.types[0].type.name)
    setType(data.types); // Update state with the fetched data
    };
    fetchType();
}, []);
  return (
    <div className="pokemon_card bg-orange-200 rounded-xl border border-solid flex" onClick={handleCardClick}>
            <div className="pokemon_card_avatar">
            <Image
            src={pokemon.image}
            width={100}
            height={100}
            alt={pokemon.name}
            />
            </div>
        <div className='justify-center my-2'>
            <div className="pokemon_card_name capitalize text-xl font-medium">
                <p>{pokemon.name}</p>
            </div>
            <div className="pokemon_card_type flex">
            {type && type.map((pokemonType, index) => (
                <div className={`inline-flex items-center rounded-md bg-${pokemonType.type.name} px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white-500/10 mr-2 capitalize`} key={index}>{pokemonType.type.name}</div>
                ))}
            </div>
        </div>
    </div>
    // <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <a href="#">
    //         <img class="rounded-t-lg" src={pokemon.image} alt="" />
    //     </a>
    //     <div class="p-5">
    //         <a href="#">
    //             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pokemon.name}</h5>
    //         </a>
    //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            // {type && type.map((pokemonType, index) => (
            // <div className='text-white'key={index}>{pokemonType.type.name}</div>
            // ))}
    //         <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    //             Read more
    //             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    //             </svg>
    //         </a>
    //     </div>
    // </div>
  )
}

export default PokemonCards