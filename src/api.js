const PAGE_SIZE = 10;

const list = (page = 1) => {
  return Promise.all(
    new Array(page * PAGE_SIZE + 1)
      .fill(true)
      .map((_, index) => index)
      .slice(1)
      .map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((res) => res.json())
          .then((rawPokemon) => {
            return {
              id: rawPokemon.id,
              name: rawPokemon.name,
              types: rawPokemon.types.map(({ type }) => {
                return type.name;
              }),
            };
          })
      )
  );
};

const api = {
  list: list,
};

export default api;


