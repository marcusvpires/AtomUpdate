import styled from "styled-components";

export const Wrapper = styled.ul`
  margin: 2rem;
  padding: 0 2rem 1.7rem;
  border-radius: 5px;
  background-color: black;
  flex-grow: 1;
  overflow-y: auto;
  scrollbar-width: thin;
`;

export const Item = styled.li`
  padding: .3rem 0;
  font-size: 1rem;
  color: #dee0e4;
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  font-weight: 600;
  margin-right: .7rem;
`;

export const Value = styled.span`
  margin-right: .3rem;
`;

export const Divider = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
  color: #95989d;
  padding: 1.5rem 0 .5rem;
  border-bottom: 2px #585d65 solid;
  width: 100%;
`;

export const Unit = styled.span`
  color: #95989d;
`;

export const EnergyLayer = styled.span`
  color: ${props => props.color};
  padding: .3rem;
  background-color: #090c11;
  border-radius: 5px;
  font-size: .9rem;
  margin-right: 0.3rem;
  font-weight: 600;
`;

export const Select = styled.select`
  background-color: #000000;
  color: #95989d;
  border: none;
  margin-top: auto;
  cursor: pointer;
`;

export const Option = styled.option`
  cursor: pointer;
  color: #95989d;
`;

