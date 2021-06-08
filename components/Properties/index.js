import React from "react"
import * as S from "./styled"

const Properties = ({atom}) => {
  const [melt, setMelt] = React.useState(atom.melt);
  const [boil, setBoil] = React.useState(atom.boil);
  const [calor, setCalor] = React.useState([atom.heat.specific, 'J/kgK']);
  const [radius, setRadius] = React.useState(atom.radius.calculated);
  const [abundance, setAbundance] = React.useState(atom.abundance.universe);
  const energyLayer = [['K', '#d12c2c'],['L', '#de7a22'],['M', '#a0c41f'],['N', '#33bc1f'],['O', '#2ec79c'],['P', '#5396ff'],['Q', '#2e80ff'],]

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
        <S.Title>Simbolo:</S.Title>
        <S.Value>{atom.symbol}</S.Value>
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
        <S.Title>Distribuição Eletrônica de Linus Pauling:</S.Title>
        <S.DistContainer>{atom.expandedconfig.split(' ').map(item => (
          <>
            <S.Dist>{item.substr(0, 2)}</S.Dist>
            <S.DistElevate>{item.substr(2, item.length)}</S.DistElevate>
          </>
        ))}</S.DistContainer>
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
          return ( <S.EnergyLayer color={b[1]}>{energy + b[0]}</S.EnergyLayer> )
        })}
      </S.Item>

      <S.Item>
        <S.Divider>Propriedades e características</S.Divider>
      </S.Item>
      <S.Item>
        <S.Title>Ponto de fusão:</S.Title>
        <S.Value>{melt}</S.Value>
        <S.Select>
          <S.Option onClick={() => {setMelt(atom.melt)}}>K° (Kelvin)</S.Option>
          <S.Option onClick={() => {setMelt((Number(atom.melt) - 273.15))}}>C° (Celsius)</S.Option>
          <S.Option onClick={() => {setMelt(((((Number(atom.melt)-273.15)/5)*9)+32).toFixed(10))}}>F° (Fahrenheit)</S.Option>
        </S.Select>
      </S.Item>
      <S.Item>
        <S.Title>Ponto de ebulição:</S.Title>
        <S.Value>{boil}</S.Value>
        <S.Select>
          <S.Option onClick={() => {setBoil(atom.boil)}}>K° (Kelvin)</S.Option>
          <S.Option onClick={() => {setBoil((Number(atom.boil) - 273.15))}}>C° (Celsius)</S.Option>
          <S.Option onClick={() => {setBoil(((((Number(atom.boil)-273.15)/5)*9)+32).toFixed(10))}}>F° (Fahrenheit)</S.Option>
        </S.Select>
      </S.Item>
      <S.Item>
        <S.Title>Condutividade Térmica:</S.Title>
        <S.Value>{atom.conductivity.thermal}</S.Value>
        <S.Unit>W/mk</S.Unit>
      </S.Item>
      <S.Item>
        <S.Title>Calor:</S.Title>
        <S.Value>{calor[0]}</S.Value>
        <S.Unit>{calor[1]}</S.Unit>
        <S.Select>
          <S.Option onClick={() => {setCalor([atom.heat.specific, 'J/kgK'])}}>Específico</S.Option>
          <S.Option onClick={() => {setCalor([atom.heat.vaporization, 'kJ/mol'])}}>Vaporização</S.Option>
          <S.Option onClick={() => {setCalor([atom.heat.fusion, 'kJ/mol'])}}>Fusão</S.Option>
        </S.Select>
      </S.Item>
      <S.Item>
        <S.Title>Raio:</S.Title>
        <S.Value>{radius}</S.Value>
        <S.Unit>pm</S.Unit>
        <S.Select>
          <S.Option onClick={() => {setRadius(atom.radius.calculated)}}>Calculado</S.Option>
          <S.Option onClick={() => {setRadius(atom.radius.empirical)}}>Empírico</S.Option>
          <S.Option onClick={() => {setRadius(atom.radius.covalent)}}>Covalente</S.Option>
          <S.Option onClick={() => {setRadius(atom.radius.vanderwaals)}}>Van der Waals</S.Option>
        </S.Select>
      </S.Item>
      <S.Item>
        <S.Title>Densidade:</S.Title>
        <S.Value>{atom.density.stp}</S.Value>
        <S.Unit>kg/m³</S.Unit>
       
      </S.Item>
      <S.Item>
        <S.Title>Abundância:</S.Title>
        <S.Value>{abundance}</S.Value>
        <S.Unit>%</S.Unit>
        <S.Select>
          <S.Option onClick={() => {setAbundance(atom.abundance.universe)}}>Universo</S.Option>
          <S.Option onClick={() => {setAbundance(atom.abundance.solar)}}>Sistema solar</S.Option>
          <S.Option onClick={() => {setAbundance(atom.abundance.meteor)}}>Meteoro</S.Option>
          <S.Option onClick={() => {setAbundance(atom.abundance.crust)}}>Crosta da terra</S.Option>
          <S.Option onClick={() => {setAbundance(atom.abundance.ocean)}}>Oceano</S.Option>
          <S.Option onClick={() => {setAbundance(atom.abundance.human)}}>Seres humanos</S.Option>
        </S.Select>
      </S.Item>

    </S.Wrapper>
)}

export default Properties