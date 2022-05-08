import React, { useState, useEffect } from "react";
import ModalHeader from "./ModalHeader/modalHeader";
import Ability from "./Ability/ability";
import Types from "./Types/types";
import Stats from "./Stats/stats";
import * as S from "./styles";

const Modal = ({ isShowing, toggle, item }) => {
  return isShowing ? (
    <S.ModalOverlay>
      <S.ModalWrapper>
        <S.Modal>
          <ModalHeader {...{ toggle, item }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                flex: 1,
                display: "flex",
              }}
            >
              <img
                style={{ width: "100%" }}
                src={item.sprites.front_default}
                alt={item.name}
              />
            </div>

            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Types item={item} />
              <Stats item={item} />
              <Ability item={item} />
            </div>
          </div>
        </S.Modal>
      </S.ModalWrapper>
    </S.ModalOverlay>
  ) : null;
};

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  };
};

export default Modal;
