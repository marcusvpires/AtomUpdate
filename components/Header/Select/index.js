import React from "react";
import db from '../../../db'
import * as S from "./styled";

const Select = ({ search, setAtom, searchView }) => {
  return (
    <S.Wrapper searchView={searchView}>
      <S.Select>
      {search.map((_, index) => {
        if (_) {
          const element = db[Number(index)]
          return (
            <S.Element key={index} onClick={() => {setAtom(element)}}>
              <S.Symbol><span>{element.symbol}</span></S.Symbol>
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
