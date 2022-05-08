import React, { useState, useEffect } from "react";
import * as S from "./styles";
const Ability = ({ item }) => {
  const abilities = item?.abilities.map((e, index) => {
    return (
      <div key={index} style={{ flexDirection: "row", display: "flex" }}>
        <S.Infos>{e.ability.name}</S.Infos>
      </div>
    );
  });

  return (
    <div style={{ marginTop: 20 }}>
      <S.Title>Abilidate</S.Title>
      <S.Line />
      {abilities}
    </div>
  );
};

export default Ability;
