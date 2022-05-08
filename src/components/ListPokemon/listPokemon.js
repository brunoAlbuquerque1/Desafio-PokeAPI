import React, { useEffect, useState, useMemo, memo } from "react";
import api from "../../service/api";
import CardPokemon from "../CardPokemon/cardPokemon";
import { Container, List } from "./styles";
import Loading from "../Loading/loading";
import Pagination from "../Pagination/pagination";
import SeachBar from "../SearchBar/searchBar";
import Modal, { useModal } from "../Modal/modal";
const ListPokemon = () => {
  const [pokemons, setPokemons] = useState(null);
  const [pokemonsDetails, setPokemonsDetails] = useState(null);
  const { isShowing, toggle } = useModal();
  const [page, setPage] = useState(1);
  const [idPokemon, setIdPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPokemons();
  }, [page]);

  useEffect(() => {
    getDataPokemons();
  }, [idPokemon]);

  async function getPokemons() {
    try {
      setLoading(true);
      const data = await api.get(`/pokemon?limit=${20}&offset=${20 * page}`);

      const promises = data.data.results.map(async (pokemon) => {
        return await api.get(`${pokemon.url}`);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (err) {}
  }

  async function getDataPokemons() {
    try {
      const data = await api.get(`/pokemon/${idPokemon}`);
      toggle();
      setPokemonsDetails(data);
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

  const cardPokemon = useMemo(() => {
    return (
      filtered &&
      filtered.map((item) => (
        <CardPokemon
          onClickViewPokemon={() => setIdPokemon(item.data.name)}
          data-testid="card_pokemon"
          key={item.data.id}
          id={item.data.id}
          name={item.data.name}
          img={item.data.sprites.front_default}
        />
      ))
    );
  }, [filtered]);

  return (
    <Container data-testid="resolved">
      <Modal
        {...{ isShowing, toggle }}
        item={pokemonsDetails && pokemonsDetails.data}
      />
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
      <List>{loading ? <Loading /> : cardPokemon}</List>
    </Container>
  );
};

export default ListPokemon;
