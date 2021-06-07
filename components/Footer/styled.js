import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  background-color: #161b22;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #dee0e4;

  @media(max-width: 450px) {
    padding: 0 1rem;
    width: 100%;
    position: initial;
    margin-top: auto;
  }
`;

export const Profile = styled.div`
  align-items: center;
  display: flex;
`;

export const Image = styled.div`
  border: 4px solid black;
  height: 55px;
  width: 55px;
  margin-right: .8rem;

  @media(max-width: 450px) {
    height: 55px;
    width: 55px;
  }
`;

export const ProfileInfo = styled.div``;

export const Name = styled.div`
  font-weight: 600;

  @media(max-width: 450px) {
    font-size: .7rem;
    width: 7rem;
  }
`;

export const Social = styled.div`
  align-items: center;
  display: flex;
`;

export const Icon = styled.a`
  height: 1.5rem;
  width: 1.8rem;
  margin: .5rem .1rem 0 0;
  padding: .2rem .4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  transition: 200ms;
  border-radius: 2px;
  color: #dee0e4;

  &:hover {
    background-color: #002e6c;
  }
  &:active {
    background-color: #002e6c;
    text-decoration: none;
    color: #dee0e4;
  }

  &:visited {
    color: #dee0e4;
  }

  @media(max-width: 450px) {
    height: 1rem;
    width: 1.2rem;
    margin: .2rem .1rem 0 0;
    padding: .1rem .2rem;
  }
`;

export const Report = styled.a`
  padding: .7rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 200ms;
  border-radius: 5px;
  border: 1px solid #62656a;
  background-color: #112136;
  text-decoration: none;
  color: #dee0e4;

  &:hover {
    background-color: #102b4d;
  }
  
  &:active {
    text-decoration: none;
    background-color: darkblue;
    color: #dee0e4;
  }

  &:visited {
    text-decoration: none;
    color: #dee0e4;
  }

  @media(max-width: 450px) {
    padding: .3rem .8rem;
    font-size: .9rem;
  }
`;
