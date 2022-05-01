import styled from "styled-components";
import { Link } from "react-router-dom";

export const TextFavorites = styled.a`
  cursor: pointer;
  color: #f7c307;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const ViewText = styled(Link)`
  display: flex;
  margin-top: 30px;
  text-decoration: none;
`;

export const NumberFavorites = styled.p`
  margin-left: 10px;
  cursor: pointer;
  color: #f7c307;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
