import { useContextSelector } from "use-context-selector";
import { FavoriteContext } from "../../Context/Favorite/contextFavorite";

export function useFavorite() {
  const pokemonFavorited = useContextSelector(
    FavoriteContext,
    (pokemonFavorited) => pokemonFavorited.pokemonFavorited
  );

  const addFavorite = useContextSelector(
    FavoriteContext,
    (addFavorite) => addFavorite.addFavorite
  );

  return {
    pokemonFavorited,
    addFavorite,
  };
}
