import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  top: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 250px;
  background-color: #1f1f1f;
`;

export const TextNameAuthor = styled.p`
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  margin: 10px 0;
`;

export const TextNameAuthorLinkedin = styled.a`
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
`;

export const ContainerAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
