import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
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

export const ViewImage = styled.div`
  display: flex;
`;

export const Image = styled.img`
  height: 80px;
`;

export const ViewText = styled.div`
  display: flex;
  margin-top: 30px;
  text-decoration: none;
`;
