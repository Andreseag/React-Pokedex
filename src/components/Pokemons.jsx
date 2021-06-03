import React, { useState, useEffect } from 'react';
import api from '../api';
import ListPokemons from './ListPokemons';

const Pokemons = () => {
  const [listPokemons, setListPokemons] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api.list(2).then((newPokemons) => {
      console.log(newPokemons);
      setListPokemons((pokemons) => pokemons.concat(newPokemons));
    });
  }, [page]);
  return (
    <div>
      <h1 className='text-4xl font-bold mb-4'>Pokédex</h1>
      {Object.keys(listPokemons).length && (
        <ListPokemons listPokemons={listPokemons} />
      )}
    </div>
  );
};

export default Pokemons;
