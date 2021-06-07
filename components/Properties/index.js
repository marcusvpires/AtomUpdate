import React from "react"
import * as S from "./styled"

const Properties = ({atom}) => {
  const energyLayer = [['K', '#ff5353'],['L', '#ffa453'],['M', '#d9ff53'],['N', '#69ff53'],['O', '#53ffcf'],['P', '#5396ff'],['Q', '#9153ff'],]

  return (
    <S.Wrapper>
      <S.Item>
        <S.Divider>Informações básicas</S.Divider>
      </S.Item>
      <S.Item>
        <S.Title>Nome:</S.Title>
        <S.Value>{atom.name}</S.Value>
      </S.Item>
      <S.Item>
        <S.Title>Massa Atômica:</S.Title>
        <S.Value>{atom.weight}</S.Value>
        <S.Unit>u</S.Unit>
      </S.Item>
      <S.Item>
        <S.Title>Número Atômica:</S.Title>
        <S.Value>{atom.atomic}</S.Value>
      </S.Item>
      
      <S.Item>
        <S.Divider>Elétrosfera e estrutura atômica</S.Divider>
      </S.Item>
      <S.Item>
        <S.Title>Eletronegatividade:</S.Title>
        <S.Value>{atom.electroneg}</S.Value>
      </S.Item>
      <S.Item>
        <S.Title>Condutividade elétrica:</S.Title>
        <S.Value>{atom.conductivity.electric ? atom.conductivity.electric : '0'}</S.Value>
        <S.Unit>MS/m</S.Unit>
      </S.Item>
      <S.Item>
        <S.Title>Níveis de energia:</S.Title>
        {atom.electrons.map((energy, index) => {
          const b = energyLayer[index]
          return (
            <S.EnergyLayer color={b[1]}>{energy + b[0]}</S.EnergyLayer>
          )
        })}
      </S.Item>

      <S.Item>
        <S.Divider>Propriedades e características</S.Divider>
      </S.Item>
    </S.Wrapper>
)}

export default Properties