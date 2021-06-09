import React from "react";
import searchDB from "./searchDB";
import db from "../../db";
import Select from "./Select";
import * as I from "@styled-icons/boxicons-regular/";
import * as S from "./styled";

const Header = ({ setAtom }) => {
  const [searchView, setSearchView] = React.useState(false);
  const [input, setInput] = React.useState();
  const [search, setSearch] = React.useState([]);
  return (
    <S.Wrapper searchView={searchView}>
      <S.Title searchView={searchView}>
        Estrutura e propriedades do átomo
      </S.Title>
      <S.Search searchView={searchView}>
        <S.SearchBar
          searchView={searchView}
          onFocus={() => {
            setSearchView(true);
            setSearch(db)
          }}
          onChange={(ev) => {
            const value = ev.target.value;
            setInput(value);
            if (value) {
              setSearch(
                searchDB.map((element, index) => {
                  if (
                    element.indexOf(
                      value
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                    ) !== -1
                  ) {
                    return [element, index];
                  }
                  return false;
                })
              );
            } else {
              setSearch(searchDB);
            }
          }}
          value={input}
          type="text"
          placeholder="Nome; [Simbolo]; número atômico..."
        />
        {searchView ? (
          <S.Icon
            searchView={true}
            onClick={() => {
              setSearchView(false);
            }}
          >
            <I.Exit />
          </S.Icon>
        ) : (
          <S.Icon
            onClick={() => {
              setSearchView(true);
              setSearch(db)
            }}
          >
            <I.Search />
          </S.Icon>
        )}
      </S.Search>
      <Select
        search={search}
        setAtom={setAtom}
        searchView={searchView}
        setSearchView={setSearchView}
        setInput={setInput}
      />
    </S.Wrapper>
  );
};

export default Header;
