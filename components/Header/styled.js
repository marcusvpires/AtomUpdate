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

  @media(max-width: 450px) { display: none; }
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBar = styled.input`
  color: #dee0e4;
  padding: .5rem 1rem;
  background-color: black;
  border-radius: 5px 0 0 5px;
  border: 1px #585d65 solid;
  width: 15rem;
`;

export const Icon = styled.div`
  height: 2.1rem;
  width: 2rem;
  display: flex;
  align-items: center;
  padding: 0.4rem;
  background-color: #1a4b8c;
  border-radius: 0 5px 5px 0;
`;
