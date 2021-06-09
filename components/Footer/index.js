import React from "react"
import Image from 'next/image'

import * as S from "./styled"
import * as I from "@styled-icons/boxicons-logos/"

const Footer = () => {

  const atom = {
    
  }
  
  return (
  <S.Wrapper>
    <S.Profile>
      <S.Image>
        <Image
          src="/Profile.png"
          alt="Picture of the author"
          width={80}
          height={80}
        />
      </S.Image>
      <S.ProfileInfo>
        <S.Name><S.Dev>Desenvolvido por </S.Dev>Marcus Vinícius</S.Name>
        <S.Social>
          <S.Icon href='https://twitter.com/m4rcus_vin1cius' target="_blank" >
            <I.Twitter />
          </S.Icon>
          <S.Icon href='https://discord.com/users/436946870787637248' target="_blank">
            <I.Discord />
          </S.Icon>
          <S.Icon href='https://github.com/M4rcusVinicius' target="_blank">
            <I.Github />
          </S.Icon>
          <S.Icon href='https://www.linkedin.com/in/marcus-vinicius-almeida-pires-b194691b6/' target="_blank">
            <I.Linkedin />
          </S.Icon>
        </S.Social>
      </S.ProfileInfo>
    </S.Profile>
    <S.Report href='https://github.com/M4rcusVinicius/Chemistry/issues/new' target="_blank">Reportar bug</S.Report>
  </S.Wrapper>
)}

export default Footer