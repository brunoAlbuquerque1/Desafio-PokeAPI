import React from "react";
import * as S from "./styles";
const Pagination = ({ prevPage, nextPage, page }) => {
  return (
    <S.Container>
      {page !== 0 && (
        <S.BtnPrev onClick={prevPage}>
          <S.Text>Anterior</S.Text>
          <S.PrevICon />
        </S.BtnPrev>
      )}
      <div>
        <h1 style={{ color: "#fff" }}>{page}</h1>
      </div>

      <S.BtnNext data-testid="nextButton_component" onClick={nextPage}>
        <S.NextICon />
        <S.Text>Proximo</S.Text>
      </S.BtnNext>
    </S.Container>
  );
};
export default Pagination;
