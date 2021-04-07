/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import "@fontsource/raleway"
import "@fontsource/open-sans"
import styled from "styled-components"
import PropTypes from "prop-types"
// import { HeaderLight , HeaderDark } from "./header"
// import { FooterLight , FooterDark }  from "./footer"
import SEO from "./seo"

const ColorDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.dmode ? "#282828" : "#f1f1f1"};
  `

const Layout = ({ dark, seo, children }) => {
  return (
    <ColorDiv dmode={dark}>
      {/* {dark ? <HeaderDark/> : <HeaderLight/>} */}
      <SEO title={seo} />
      <main>{children}</main>
      {/* {dark ? <FooterDark/> : <FooterLight/>} */}
    </ColorDiv>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
