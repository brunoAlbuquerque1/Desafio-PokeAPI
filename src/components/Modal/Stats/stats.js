import React, { useState, useEffect } from "react";
import * as S from "./styles";

const Stats = ({ item }) => {
  const stats = item?.stats.map((e, index) => {
    return (
      <div key={index} style={{ flexDirection: "row", display: "flex" }}>
        <div>
          <S.Infos>{e.base_stat}</S.Infos>
        </div>
        <div style={{ marginLeft: 10 }}>
          <S.Infos>{e.stat.name}</S.Infos>
        </div>
      </div>
    );
  });

  return (
    <div style={{ marginTop: 20 }}>
      <S.Title>Status</S.Title>
      <S.Line />

      {stats}
    </div>
  );
};

export default Stats;
