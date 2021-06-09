import styled, { keyframes } from "styled-components"

export const Wrapper = styled.section`
  background-color: black;
  height: 100vh;
  width: 100vh;
  position: relative;
  overflow: hidden;

  @media(max-width: 900px) {
    width: 100vw;
    height: 100vw;
  }
`;

export const Button = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  bottom: 10px;
  left: 10px;
  border-radius: 5px;
  z-index: 10;
  color: #dddde3;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background-color: #264886;
  }
`

export const Atom = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vh;
  top: 0;
  left: 0;
  transform: ${props => `scale(${props.size})`};

  @media(max-width: 900px) {
    width: 100vw;
    height: 100vw;
  }
`;

export const Core = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #96bcff;
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Layer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vh;
  top: 0;
  left: 0;
  animation: ${rotate} ${props => props.play ? '10s' : '0s'} linear infinite;
  animation-direction: ${props => props.direction};

  @media(max-width: 900px) {
    width: 100vw;
    height: 100vw;
  }
`

export const Circuit = styled.div`
  position: absolute;
  border-radius: 50%;
  width: ${props => `calc(((${props.index} * 100vh) / 7) + 20px)` };
  height: ${props => `calc(((${props.index} * 100vh) / 7) + 20px)` };
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px dashed #5c97ff;
  border-radius: 50%;

  @media(max-width: 900px) {
    width: ${props => `calc(((${props.index} * 100vw) / 7) + 20px)` };
    height: ${props => `calc(((${props.index} * 100vw) / 7) + 20px)` };
  }
`

export const ElectronPath  = styled.div`
  position: absolute;
  border-radius: 50%;
  width: ${props => `calc(((${props.index} * 100vh) / 7) + 20px)` };
  height: ${props => `calc(((${props.index} * 100vh) / 7) + 20px)` };
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ${props => `rotate(${props.rotate}deg)`};
  border-radius: 50%;
  
  @media(max-width: 900px) {
    width: ${props => `calc(((${props.index} * 100vw) / 7) + 20px)` };
    height: ${props => `calc(((${props.index} * 100vw) / 7) + 20px)` };
  }
`

export const Electron  = styled.div`
  position: absolute;
  border-radius: 50%;
  top: calc(50% - 7px);
  left: calc(100% - 7px);
  background-color: red;
  border-radius: 50%;
  width: 14px;
  height: 14px;
`