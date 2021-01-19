import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//------Icons------//
import Github from "../svg/github-logo.svg"
import External from "../svg/external-logo.svg"

const Other = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/others/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `)

  const otherProjects = data.projects.edges.filter(({ node }) => node)

  return (
    <Layout>
      <SEO title="Other Projects" />
      <div className="op-pg">
        <div id="page-title">
          <h1>Other Projects</h1>
          <div className="divider"></div>
        </div>
        <div className="op-content">
          {otherProjects &&
            otherProjects.map(({ node }) => {
              const { frontmatter, html } = node
              const { external, title, tech, github } = frontmatter

              return (
                <div className="op-lists">
                  <div className="op-content">
                    <h3 className="op-title">{title}</h3>
                    <div
                      className="op-description"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />

                    <div className="op-tech-stack">
                      {tech.length && (
                        <ul className="op-tech-list">
                          {tech.map(tech => (
                            <li>{tech}</li>
                          ))}
                        </ul>
                      )}
                      <div className="op-links">
                        {github && (
                          <a href={github}>
                            <img className="svg" src={Github} alt="github" />
                          </a>
                        )}
                        {external && (
                          <a href={external} className="external">
                            <img
                              className="svg"
                              src={External}
                              alt="external"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export default Other
