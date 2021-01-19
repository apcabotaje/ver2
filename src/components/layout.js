import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Dashboard from "./dashboard"

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
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  )
}

export default Layout
