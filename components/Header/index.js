import React from "react"
import * as I from "@styled-icons/boxicons-regular/"
import * as S from "./styled"

const Header = () => {
  const [searchView, setSearchView] = React.useState(false)
  return (
  <S.Wrapper>
    <S.Title>Estrutura e propriedades do átomo</S.Title>
    <S.Search >
      <S.SearchBar 
        type="text"
        placeholder="Nome; [Simbolo]; número atômico..."
      />
      <S.Icon>
        <I.Search />
      </S.Icon>
    </S.Search>
  </S.Wrapper>
)}

export default Header