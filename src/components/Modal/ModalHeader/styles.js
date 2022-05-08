import styled from "styled-components";
import { Close } from "@styled-icons/evil/Close";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  align-items: center;
  padding: 8px 10px;
  font-weight: bold;
`;

export const ButtonClose = styled.div`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export const CloseIcon = styled(Close)`
  color: #000;
  height: 40px;
`;

export const NamePokemon = styled.p`
  font-size: 22px;
`;
