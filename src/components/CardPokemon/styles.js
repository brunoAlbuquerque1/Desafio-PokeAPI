import styled from "styled-components";
import { Heart } from "@styled-icons/bootstrap/Heart";
import { HeartFill } from "@styled-icons/bootstrap/HeartFill";

export const Container = styled.div`
  width: 216px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease-in-out;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  border-color: #efefef;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: #444;
  }

  @media (max-width: 480px) {
    width: 130px;

    img {
      width: 130px;
      height: auto;

      margin-bottom: -6px;
    }
  }
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 0;

  h4 {
    text-transform: capitalize;
    color: #fff;
    font-size: 16px;
    font-weight: 800;
  }

  p {
    margin-top: 8px;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 2px;
  }
`;

export const NotFavoriteICon = styled(Heart)`
  color: red;
  height: 20px;
`;

export const FavoriteICon = styled(HeartFill)`
  color: red;
  height: 20px;
`;

export const ViewFavorite = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`;

export const ButtonDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #f7c307;
  border-radius: 20px;
  margin: 20px;
`;

export const TextDetails = styled.p`
  font-weight: bold;
  font-size: 16px;
`;
