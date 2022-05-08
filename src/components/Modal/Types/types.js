import React, { useState, useEffect } from "react";
import * as S from "./styles";

const Types = ({ item }) => {
  const types = item?.types.map((e) => {
    return (
      <div style={{ flexDirection: "row", display: "flex" }}>
        <S.Infos>{e.type.name}</S.Infos>
      </div>
    );
  });

  return (
    <div style={{ marginTop: 20 }}>
      <S.Title>Tipo</S.Title>
      <S.Line />
      {types}
    </div>
  );
};

export default Types;
