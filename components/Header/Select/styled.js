import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 84px;
  height: calc(100vh - 165px);
  width: calc(100vw - 100vh - 3px);
  background-color: black;
  left: 0;

  ${props => !props.searchView && `
    display: none;
  `}
`;

export const Select = styled.div`
  padding: 0.4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  overflow: auto;
  max-height: calc(100vh - 167px);
  scrollbar-width: thin;
 
  @media(max-width: 1300px) {
    grid-template-columns: repeat(2,1fr);
  }
`;

export const Element = styled.div`
  background-color: #090c10;
  border-radius: 5px;
  padding: 0.2rem 1rem 0.2rem 0.2rem;
  margin: 0.2rem;
  color: #dee0e4;
  font-size: 1rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Symbol = styled.div`
  border-radius: 5px;
  height: 2.8rem;
  width: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: #113769;
  margin-right: 0.8rem;
`;
