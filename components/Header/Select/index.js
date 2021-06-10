import React from "react";
import ReactGA from 'react-ga';

import db from "../../../db";
import * as S from "./styled";

const Select = ({ search, setAtom, searchView, setSearchView, setInput }) => {
  const selectAtom = (name) => {
    ReactGA.event({
      category: 'Select atom',
      action: `Atom name: ${name}`
    });
  }
  return (
    <S.Wrapper searchView={searchView}>
      <S.Select searchView={searchView}>
        {search.map((_, index) => {
          if (_) {
            const element = db[Number(index)];
            return (
              <S.Element
                key={index}
                onClick={() => {
                  selectAtom(element.name)
                  setAtom(element);
                  setSearchView(false);
                  setInput('');
                }}
              >
                <S.Symbol>
                  <span>{element.symbol}</span>
                </S.Symbol>
                {element.name}
              </S.Element>
            );
          }
        })}
      </S.Select>
    </S.Wrapper>
  );
};

export default Select;
