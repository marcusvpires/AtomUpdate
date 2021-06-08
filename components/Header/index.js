import React from "react"
import * as S from "./styled"

const Header = () => (
  <S.Wrapper>
    <S.Title>Estrutura e propriedades do átomo</S.Title>
    <S.Search >
      <S.SearchBar 
        type="text"
        placeholder="Nome, [Simbolo] ou número atômico.."
      />
    </S.Search>
  </S.Wrapper>
)

export default Header