import styled from "styled-components";
import { LeftArrowAlt } from "@styled-icons/boxicons-regular/LeftArrowAlt";
import { RightArrowAlt } from "@styled-icons/boxicons-regular/RightArrowAlt";

export const Container = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px 0;
`;

export const BtnNext = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 5px;
`;

export const BtnPrev = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 5px;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  margin-right: 10px;
  margin-left: 10px;
`;

export const NextICon = styled(RightArrowAlt)`
  color: #fff;
  height: 40px;
`;

export const PrevICon = styled(LeftArrowAlt)`
  color: #fff;
  height: 40px;
`;
