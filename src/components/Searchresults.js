// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
import Image from "next/image";

const Searchresults = ({pokemon}) => {
//   const router = useRouter();
//   console.log(router.query.pokemon)
//   const  pokemonid = router.query.pokemon;
//   const [pokemon, setPokemon] = useState(null);
//   console.log(pokemonid)

//   useEffect(() => {
//     const fetchPokemon = async () => {
//       try {
//         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`);
//         if (!res.ok) {
//           throw new Error('Failed to fetch Pokemon');
//         }
//         const data = await res.json();
//         setPokemon(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
    
//     if (pokemonid) {
//       fetchPokemon();
//     }
//   }, [pokemonid]);
//   console.log(pokemon)
  
  return (
    <div className="bg-white pb-4">
      <h1 className="bg-black text-white font-bold padding-1rem text-2xl"></h1>
      {pokemon && (
        <div className="flex">
          <div className="pokemon_card_avatar">
            <Image
            src={pokemon.sprites.front_default}
            width={300}
            height={300}
            alt={pokemon.name}
            />
          </div>
          <div className="w-full">
          <h2 className="text-xl font-bold capitalize text-grass">Pokemon Name : {pokemon.name}</h2>
          <h3>Type:</h3>
          <div className="flex">
            {pokemon.types.map((type, index) => (
              <div className={`inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-${type.type.name} ring-1 ring-inset ring-${type.type.name}-500/10 mr-2 capitalize`} key={index}>{type.type.name}</div>
              ))}
          </div>
          <h3>Abilities:</h3>
          <div className="flex">
            {pokemon.abilities.map((ability, index) => (
              <div className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-2 capitalize" key={index}>{ability.ability.name}</div>
              ))}
          </div>
          {/* Add more details as needed */}

          </div>
        </div>
      )}
    </div>
  );
};

export default Searchresults;