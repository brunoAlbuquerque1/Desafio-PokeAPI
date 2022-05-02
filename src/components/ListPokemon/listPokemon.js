import React, { useEffect, useState } from "react";
import api from "../../service/api";
import CardPokemon from "../CardPokemon/cardPokemon";
import { Container, List } from "./styles";
import Loading from "../Loading/loading";
import Pagination from "../Pagination/pagination";
import SeachBar from "../SearchBar/searchBar";

const ListPokemon = () => {
  const [pokemons, setPokemons] = useState(null);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

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
  const s = search && search.toLowerCase();
  const filtered =
    !pokemons || !s
      ? pokemons
      : pokemons.filter((element) =>
          element.data?.name.toLowerCase().includes(s)
        );

  return (
    <Container data-testid="resolved">
      <SeachBar search={search} onChange={(ev) => setSearch(ev.target.value)} />
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
          filtered &&
          filtered.map((item) => (
            <CardPokemon
              data-testid="card_pokemon"
              key={item.id}
              id={item.data.id}
              name={item.data.name}
              img={item.data.sprites.front_default}
            />
          ))
        )}
      </List>
    </Container>
  );
};

export default ListPokemon;
