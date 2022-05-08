import * as S from "./styles";

const ModalHeader = ({ toggle, item }) => (
  <S.Header>
    <S.NamePokemon>{item.name}</S.NamePokemon>
    <S.ButtonClose data-dismiss="modal" aria-label="Close" onClick={toggle}>
      <S.CloseIcon />
    </S.ButtonClose>
  </S.Header>
);

export default ModalHeader;
