import styled from "styled-components";

export const Container = styled.header`
  top: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 250px;
  background-color: #1f1f1f;
`;
export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TextOff = styled.p`
  color: #f7c307;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const TextFavorites = styled.a`
  cursor: pointer;
  color: #f7c307;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const NumberFavorites = styled.p`
  margin-left: 10px;
  cursor: pointer;
  color: #f7c307;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
