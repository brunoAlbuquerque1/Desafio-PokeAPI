import styled from "styled-components";
import { Close } from "@styled-icons/evil/Close";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  margin-bottom: 140px;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 30px;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

export const Modal = styled.div`
  z-index: 100;
  background: #fff;
  position: relative;
  margin: 20px auto;
  border-radius: 3px;
  max-width: 800px;
  padding: 8px;
  border-radius: 4px;
`;
