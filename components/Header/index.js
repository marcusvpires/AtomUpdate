import React from "react"
import * as I from "@styled-icons/boxicons-regular/"
import * as S from "./styled"

const Header = () => {
  const [searchView, setSearchView] = React.useState(false)
  return (
  <S.Wrapper>
    <S.Title searchView={searchView}>Estrutura e propriedades do átomo</S.Title>
    <S.Search searchView={searchView} >
      <S.SearchBar 
        searchView={searchView}
        onFocus={() => {setSearchView(true)}}
        onBlur={() => {setSearchView(false)}}
        type="text"
        placeholder="Nome; [Simbolo]; número atômico..."
      />
      <S.Icon searchView={searchView}>
        { searchView ? 
          <I.Exit onClick={() => {setSearchView(false)}}>X</I.Exit> :
          <I.Search onClick={() => {setSearchView(true)}} />
        }
        
      </S.Icon>
    </S.Search>
  </S.Wrapper>
)}

export default Header