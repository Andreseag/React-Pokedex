import React from 'react';

import { capitalizeLetter } from '../helpers/';

const ListPokemons = ({ listPokemons }) => {
  return (
    <div>
      {listPokemons.map((pokemon, i) => {
        const { name, types, id } = pokemon;
        return (
          <div
            key={id}
            className={`bg-${types[0]} rounded-xl mb-14 p-4 py-8 flex justify-between items-center shadow-xl transform hover:scale-105 transition-all cursor-pointer`}
          >
            <div className='pokemon-info'>
              <span className='text-gray text-sm font-bold'>{`#${
                id > 9 ? '0' : '00'
              }${id}`}</span>
              <p className='font-bold text-white text-2xl'>
                {capitalizeLetter(name)}
              </p>
              <div className='types flex mt-1'>
                {types.map((type) => (
                  <span
                    className={`bg-${type}-dark rounded text-dark px-3 py-1 text-xs mr-2 flex`}
                  >
                    <img src={`icons/${type}.svg`} alt='' width='15px' />
                    <p className='m-0 ml-1 text-white'>
                      {capitalizeLetter(type)}
                    </p>
                  </span>
                ))}
              </div>
              <img
                src='/pattern.svg'
                alt='pattern'
                className='absolute top-2 left-20'
                width='108'
              />
            </div>
            <div className='pokemon-image'>
              <figure className='m-0'>
                <img
                  src={`https://pokeres.bastionbot.org/images/pokemon/${
                    i + 1
                  }.png`}
                  alt={`pokemon-${name}`}
                  className='w-36 z-10 absolute right-5 bottom-7'
                />
              </figure>
              <img
                src='/pokeball.svg'
                alt='pokeball'
                className='absolute top-0 right-0'
                width='168'
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListPokemons;
