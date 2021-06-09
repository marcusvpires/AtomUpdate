import React from "react";
import * as S from "./styled";
import * as I from "@styled-icons/boxicons-regular/";

const Atom = ({ layers }) => {
  const [play, setPlay] = React.useState(false);
  const size = [2, 1.8, 1.7, 1.4, 1.3, 1.1, 1,  .9]

  return (
    <S.Wrapper>
      <S.Button
        onClick={() => {
          setPlay(!play);
        }}
      >
        {play ? <I.Stop /> : <I.Play />}
      </S.Button>
      <S.Atom size={layers && size[layers.length]}>
        <S.Core />
        {layers &&
          layers.map((amount, index) => {
            const angle = 360 / Number(amount)
            const electrons = []
            for (let num = 1; num <= amount; num++) {
              electrons.push(angle * num)
            }
            console.log(electrons)
            return (
              <S.Layer play={play} direction={index & 1 ? 'normal' : 'reverse'} key={index + amount}>
                <S.Circuit index={index + 1} />
                {electrons.map(rotate => <S.ElectronPath rotate={rotate} index={index + 1}><S.Electron /></S.ElectronPath>)}
              </S.Layer>
            );
          })}
      </S.Atom>
    </S.Wrapper>
  );
};

export default Atom;