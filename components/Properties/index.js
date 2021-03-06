import React from "react";
import * as S from "./styled";

const Properties = ({ atom }) => {
  const [melt, setMelt] = React.useState(atom.melt);
  const [boil, setBoil] = React.useState(atom.boil);
  const [calor, setCalor] = React.useState(() => {
    if (atom.heat.specific) {
      return `${atom.heat.specific}&&J/kgK`;
    } else {
      return ["Indefinido", ""];
    }
  });
  const [radius, setRadius] = React.useState(() => {
    if (atom.radius.calculated) {
      return atom.radius.calculated;
    } else {
      return "Indefinido";
    }
  });
  const [abundance, setAbundance] = React.useState(atom.abundance.universe);
  const energyLayer = [
    ["K", "#d12c2c"],
    ["L", "#de7a22"],
    ["M", "#a0c41f"],
    ["N", "#33bc1f"],
    ["O", "#2ec79c"],
    ["P", "#5396ff"],
    ["Q", "#2e80ff"],
  ];

  return (
    <S.Wrapper>
      <S.Item key="basicInformation">
        <S.Divider>Informações básicas</S.Divider>
      </S.Item>
      <S.Item key="name">
        <S.Title>Nome:</S.Title>
        <S.Value>{atom.name}</S.Value>
      </S.Item>
      <S.Item key="symbol">
        <S.Title>Simbolo:</S.Title>
        <S.Value>{atom.symbol}</S.Value>
      </S.Item>
      <S.Item key="weight">
        <S.Title>Massa Atômica:</S.Title>
        <S.Value>{atom.weight}</S.Value>
        <S.Unit>u</S.Unit>
      </S.Item>
      <S.Item key="weight">
        <S.Title>Elétrons na camada de valência:</S.Title>
        <S.Value>{atom.valence ? atom.valence : "Indefinido"}</S.Value>
      </S.Item>
      <S.Item key="atomic">
        <S.Title>Número Atômica:</S.Title>
        <S.Value>{atom.atomic}</S.Value>
      </S.Item>

      <S.Item key="eletroEstrutura">
        <S.Divider>Elétrosfera e estrutura atômica</S.Divider>
      </S.Item>
      <S.Item>
        <S.Title>Distribuição Eletrônica de Linus Pauling:</S.Title>
        <S.DistContainer>
          {atom.expandedconfig.split(" ").map((item) => (
            <>
              <S.Dist>{item.substr(0, 2)}</S.Dist>
              <S.DistElevate>{item.substr(2, item.length)}</S.DistElevate>
            </>
          ))}
        </S.DistContainer>
      </S.Item>
      <S.Item key="electroneg">
        <S.Title>Eletronegatividade:</S.Title>
        <S.Value>{atom.electroneg ? atom.electroneg : "Indefinido"}</S.Value>
      </S.Item>
      <S.Item key="electric">
        <S.Title>Condutividade elétrica:</S.Title>
        {atom?.conductivity?.electric ? (
          <>
            <S.Value>{atom.conductivity.electric}</S.Value>
            <S.Unit>MS/m</S.Unit>
          </>
        ) : (
          "Indefinido"
        )}
      </S.Item>
      <S.Item>
        <S.Title>Níveis de energia:</S.Title>
        {atom.electrons.map((energy, index) => {
          const b = energyLayer[index];
          return <S.EnergyLayer color={b[1]}>{energy + b[0]}</S.EnergyLayer>;
        })}
      </S.Item>

      <S.Item key="proprietCaracteristcs">
        <S.Divider>Propriedades e características</S.Divider>
      </S.Item>
      <S.Item key="melt">
        <S.Title>Ponto de fusão:</S.Title>
        {atom.melt ? (
          <>
            <S.Value>{melt}</S.Value>
            <S.Select
              value={melt}
              onChange={(ev) => {
                setMelt(ev.target.value);
              }}
            >
              <S.Option value={atom.melt}>K° (Kelvin)</S.Option>
              <S.Option value={Number(atom.melt) - 273.15}>
                C° (Celsius)
              </S.Option>
              <S.Option
                value={(((Number(atom.melt) - 273.15) / 5) * 9 + 32).toFixed(5)}
              >
                F° (Fahrenheit)
              </S.Option>
            </S.Select>
          </>
        ) : (
          "Indefinido"
        )}
      </S.Item>
      <S.Item key="boil">
        <S.Title>Ponto de ebulição:</S.Title>
        {atom.boil ? (
          <>
            <S.Value>{boil}</S.Value>
            <S.Select
              value={boil}
              onChange={(ev) => {
                setBoil(ev.target.value);
              }}
            >
              <S.Option value={atom.boil}>K° (Kelvin)</S.Option>
              <S.Option value={Number(atom.boil) - 273.15}>
                C° (Celsius)
              </S.Option>
              <S.Option
                value={(((Number(atom.boil) - 273.15) / 5) * 9 + 32).toFixed(5)}
              >
                F° (Fahrenheit)
              </S.Option>
            </S.Select>
          </>
        ) : (
          "Indefinido"
        )}
      </S.Item>
      <S.Item key="thermal">
        <S.Title>Condutividade Térmica:</S.Title>
        {atom?.conductivity?.thermal ? (
          <>
            <S.Value>{atom.conductivity.thermal}</S.Value>
            <S.Unit>W/mk</S.Unit>
          </>
        ) : (
          "Indefinido"
        )}
      </S.Item>
      <S.Item key="heat">
        <S.Title>Calor:</S.Title>
        <S.Value>{calor.split("&&")[0]}</S.Value>
        <S.Unit>{calor.split("&&")[1]}</S.Unit>
        {atom.heat && (
          <S.Select
            value={calor}
            onChange={(ev) => {
              setCalor(ev.target.value);
            }}
          >
            {atom.heat.specific && (
              <S.Option value={`${atom.heat.specific}&&J/kgK`}>
                Específico
              </S.Option>
            )}
            {atom.heat.vaporization && (
              <S.Option value={`${atom.heat.vaporization}&&kJ/mol`}>
                Vaporização
              </S.Option>
            )}
            {atom.heat.fusion && (
              <S.Option value={`${atom.heat.fusion}&&kJ/mol`}>Fusão</S.Option>
            )}
          </S.Select>
        )}
      </S.Item>
      <S.Item key="radius">
        <S.Title>Raio:</S.Title>
        {atom.radius ? (
          <>
            <S.Value>{radius}</S.Value>
            <S.Unit>pm</S.Unit>
            <S.Select
              value={radius}
              onChange={(ev) => {
                setRadius(ev.target.value);
              }}
            >
              {atom.radius.calculated && (
                <S.Option value={atom.radius.calculated}>Calculado</S.Option>
              )}
              {atom.radius.empirical && (
                <S.Option value={atom.radius.empirical}>Empírico</S.Option>
              )}
              {atom.radius.covalent && (
                <S.Option value={atom.radius.covalent}>Covalente</S.Option>
              )}
              {atom.radius.vanderwaals && (
                <S.Option value={atom.radius.vanderwaals}>
                  Van der Waals
                </S.Option>
              )}
            </S.Select>
          </>
        ) : (
          "Indefinido"
        )}
      </S.Item>
      <S.Item key="density">
        <S.Title>Densidade:</S.Title>
        {atom?.density?.stp ? (
          <>
            <S.Value>{atom.density.stp}</S.Value>
            <S.Unit>kg/m³</S.Unit>
          </>
        ) : (
          "Indefinido"
        )}
      </S.Item>
      <S.Item key="abundance">
        <S.Title>Abundância:</S.Title>
        <S.Value>{abundance}</S.Value>
        <S.Unit>%</S.Unit>
        <S.Select
          value={abundance}
          onChange={(ev) => {
            setAbundance(ev.target.value);
          }}
        >
          <S.Option value={atom.abundance.universe}>Universo</S.Option>
          <S.Option value={atom.abundance.solar}>Sistema solar</S.Option>
          <S.Option value={atom.abundance.meteor}>Meteoro</S.Option>
          <S.Option value={atom.abundance.crust}>Crosta da terra</S.Option>
          <S.Option value={atom.abundance.ocean}>Oceano</S.Option>
          <S.Option value={atom.abundance.human}>Seres humanos</S.Option>
        </S.Select>
      </S.Item>
    </S.Wrapper>
  );
};

export default Properties;
