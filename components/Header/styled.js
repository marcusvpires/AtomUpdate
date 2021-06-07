import styled from "styled-components";

export const Wrapper = styled.div`
  height: 5rem;
  width: 100%;
  padding: 0 2rem;
  background-color: #161b22;
  display: flex;
  align-items: center;
  color: #dee0e4;

  @media(max-width: 450px) { display: none; }
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
`;
