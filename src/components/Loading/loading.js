import React from "react";
import * as S from "./styles";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      data-testid="loading"
    >
      <h1 style={{ color: "#fff" }}>carregando....</h1>
    </div>
  );
};

export default Loading;
