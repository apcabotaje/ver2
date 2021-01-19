import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Dashboard from "./dashboard"

//------Icon Import------//
import Toggle from "../svg/bars-logo.svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const toggleMenu = () => {
    const navigation = document.querySelector(".dashboard")
    const closed = document.querySelector(".container")
    navigation.classList.toggle("active")
    closed.classList.toggle("active")
  }

  return (
    <div sitetitle={data.site.siteMetadata.title || `Title`}>
      <main>
        <div className="glass">
          <div className="dashboard">
            <Dashboard />
          </div>
          <div className="container">{children}</div>
        </div>
      </main>
      <div className="toggle" onClick={toggleMenu}>
        <img className="toggle-img" src={Toggle} alt="toggle"></img>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  )
}

export default Layout
