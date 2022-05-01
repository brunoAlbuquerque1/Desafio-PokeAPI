import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  top: 20px;
  width: 100%;
  padding: 0 10%;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 20px;
  padding: 10px;
  border-radius: 25px;
  padding: 0 20px;
  font-weight: 600;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
