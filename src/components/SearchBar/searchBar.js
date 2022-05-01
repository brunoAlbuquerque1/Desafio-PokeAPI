import React from "react";
import * as S from "./styles";

const SearchBar = ({ onChange, search }) => {
  return (
    <S.Container>
      <S.Input
        type="search"
        value={search}
        placeholder="Digite aqui seu Pokemon"
        onChange={onChange}
      />
    </S.Container>
  );
};

export default SearchBar;
