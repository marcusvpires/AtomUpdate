import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: calc(100% - 100vh);
  border-left: 2px solid #62656a;
  display: flex;
  flex-direction: column;

  @media(max-width: 900px) {
    width: 100%;
    border: none;
    height: auto;
  }
`;
''