import React, { useEffect, useState } from "react";
import api from "../../service/api";
import CardPokemon from "../CardPokemon/cardPokemon";
import { Container, List } from "./styles";
import Loading from "../Loading/loading";
import Pagination from "../Pagination/pagination";

const ListPokemon = ({ search }) => {
  const [pokemons, setPokemons] = useState(null);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPokemons();
  }, [page]);

  async function getPokemons() {
    try {
      setLoading(true);
      const data = await api.get(
        `/pokemon?limit=${limit}&offset=${limit * page}`
      );

      const promises = data.data.results.map(async (pokemon) => {
        return await api.get(`${pokemon.url}`);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (err) {}
  }

  function lastPage() {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  }

  function nextPage() {
    const nextPage = Math.min(page + 1);
    setPage(nextPage);
  }

  return (
    <Container data-testid="resolved">
      <Pagination
        page={page}
        nextPage={() => {
          nextPage();
        }}
        prevPage={() => {
          lastPage();
        }}
      />
      <List>
        {loading ? (
          <Loading />
        ) : (
          pokemons?.map((item) => (
            <CardPokemon
              data-testid="card_pokemon"
              key={item.id}
              name={item.data.name}
              // pokemon={item.data}
              img={item.data.sprites.front_default}
            />
          ))
        )}
      </List>
    </Container>
  );
};

export default ListPokemon;
