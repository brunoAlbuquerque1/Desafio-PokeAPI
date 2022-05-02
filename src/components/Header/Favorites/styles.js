import styled from "styled-components";
import { Link } from "react-router-dom";

export const TextFavorites = styled.p`
  cursor: pointer;
  color: #f7c307;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const ViewText = styled(Link)`
  display: flex;
  margin-top: 30px;
  padding: 10px;

  text-decoration: none;
  border-width: 1px;
  border-color: #fff;
  border-style: solid;
  border-radius: 10px;
`;

export const NumberFavorites = styled.p`
  cursor: pointer;
  color: #f7c307;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
