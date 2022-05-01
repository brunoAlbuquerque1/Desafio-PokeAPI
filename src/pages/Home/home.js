import React from "react";
import ListPokemon from "../../components/ListPokemon/listPokemon";

const Home = () => {
  return (
    <div
      data-testid="home-page"
      style={{ position: "relative", width: "100%" }}
    >
      <ListPokemon />
    </div>
  );
};

export default Home;
