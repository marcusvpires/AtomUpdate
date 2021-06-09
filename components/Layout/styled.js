import styled from "styled-components";

export const LayoutWrapper = styled.div`
  background-color: #090c10;
  width: 100%;
  min-height: 100vh;
`;

export const LayoutMain = styled.main`
  display: flex;

  @media(max-width: 900px) {
    flex-direction: column;
  }
`;
