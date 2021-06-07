import React from "react"
import GlobalStyles from "../../styles/GlobalStyles"
import * as S from "./styled"

const Layout = ({ children }) => (
    <S.LayoutWrapper>
      <GlobalStyles />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )

export default Layout