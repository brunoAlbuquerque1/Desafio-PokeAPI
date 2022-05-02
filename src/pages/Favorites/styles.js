import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 10%;
`;

export const ContainerEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const TextEmpty = styled.p`
  color: #fff;
  font-size: 24px;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
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
