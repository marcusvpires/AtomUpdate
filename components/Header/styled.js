import styled from "styled-components";

export const Wrapper = styled.div`
  height: 5rem;
  width: 100%;
  padding: 0 2rem;
  background-color: #161b22;
  display: flex;
  align-items: center;
  color: #dee0e4;
  justify-content: space-between;
  position: relative;

  @media(max-width: 1400px) {
    padding: 0 1rem;
  }

`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;

  ${props => props.searchView && `
    display: none;
  `}

  @media(max-width: 1400px) {
    display: none;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  ${props => props.searchView && `
    width: 100%;
    `}

  @media(max-width: 1400px) {
    width: 100%;
  }
`;

export const SearchBar = styled.input`
  color: #dee0e4;
  padding: .5rem 1rem;
  background-color: black;
  border-radius: 5px 0 0 5px;
  border: 1px #585d65 solid;
  width: 15rem;

  &:focus {
    outline: none;
    border: 1px solid #1a4b8c ;
  }

  ${props => props.searchView && `
    width: 100%;
    padding: .8rem 1.2rem;
    font-size: 1rem;
  `}
  @media(max-width: 1400px) {
    width: 100%;
    padding: .8rem 1.2rem;
    font-size: 1rem;
  }

  @media(max-width: 1400px) {
    width: 100%;
    padding: .8rem 1.2rem;
    font-size: .9rem;
  }
`;

export const Icon = styled.div`
  height: 2.1rem;
  width: 2rem;
  display: flex;
  align-items: center;
  padding: 0.4rem;
  background-color: #1a4b8c;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

  ${props => props.searchView && `
    height: 2.9rem;
    width: 2.9rem;
    padding: .5rem;
  `}

  &:hover {
    background-color: #1f5baa;
  }

  @media(max-width: 1400px) {
    height: 2.9rem;
    width: 2.9rem;
    padding: .5rem;
  }
`;
