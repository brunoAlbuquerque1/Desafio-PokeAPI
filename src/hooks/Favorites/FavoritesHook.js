import React, { createContext, useContext, useCallback, useState } from "react";

// const FavoriteContext = createContext(
//  { pokemonFavorited:'',
//   Removefavorite()
// });

// import React from "react";
// const FavoriteContext = React.createContext({
//     favoritePokemons: [],
//     updateFavoritePokemons: (id) => null
// })

// export const FavoriteProvider = FavoriteContext.Provider

// export default FavoriteContext;

const FavoriteContext = createContext({
  pokemonFavorited: [],
  addFavorite: (item) => null,
  Removefavorite: (item) => null,
});

const FavoriteProvider = ({ children }) => {
  const getPokemon = () => {
    return [];
  };

  const [pokemonFavorited, setpokemon] = useState(() => {
    return getPokemon();
  });

  const addFavorite = useCallback(
    (item) => {
      const itemPokemon = pokemonFavorited.find((el) => el.id === item.id);

      if (!!itemPokemon) {
        const newItem = pokemonFavorited.filter(
          (item) => item.id != itemPokemon.id
        );

        setpokemon([...newItem]);
      } else {
        setpokemon([...pokemonFavorited, { ...item }]);
      }
    },
    [pokemonFavorited]
  );

  const Removefavorite = useCallback(
    (id) => {
      const pokemonItem = [...pokemonFavorited];
      const index = pokemonItem.findIndex((item) => item.id === id);

      pokemonItem[index].count > 1
        ? (pokemonItem[index].count -= 1)
        : pokemonItem.splice(index, 1);

      setpokemon([...pokemonItem]);
    },
    [pokemonFavorited]
  );

  return (
    <FavoriteContext.Provider
      value={{ pokemonFavorited, addFavorite, Removefavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

function useFavorite() {
  const context = useContext(FavoriteContext);

  if (!context) return console.log("err");
  return context;
}

export { FavoriteProvider, useFavorite };
