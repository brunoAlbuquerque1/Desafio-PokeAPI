import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 50px 10%;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
  @media screen and (min-width: 900px) and (max-width: 1500px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
`;
