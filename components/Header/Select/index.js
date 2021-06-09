import React from "react";
import db from '../../../db'
import * as S from "./styled";

const Select = ({ search }) => {
  return (
    <S.Wrapper>
      <S.Select>
      {search.map((_, index) => {
        if (_) {
          const element = db[Number(index)]
          console.log(element)
          return (
            <S.Element>
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
