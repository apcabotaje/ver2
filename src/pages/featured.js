import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

//------Icons------//
import Github from "../svg/github-logo.svg"
import External from "../svg/external-logo.svg"

const Featured = () => {
  const data = useStaticQuery(graphql`
    query {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/featured/" } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
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

  const featuredProjects = data.featured.edges.filter(({ node }) => node)

  return (
    <Layout>
      <SEO title="Featured Projects" />
      <div className="fp-pg">
        <div id="page-title">
          <h1>Featured Projects</h1>
          <div className="divider"></div>
        </div>
        <div className="fp-content">
          {featuredProjects &&
            featuredProjects.map(({ node }) => {
              const { frontmatter, html } = node
              const { external, title, tech, github, cover } = frontmatter

              return (
                <div className="project-lists">
                  <div className="project-content">
                    <h3 className="project-title">{title}</h3>
                    <div
                      className="project-description"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />

                    {tech.length && (
                      <ul className="project-tech-list">
                        {tech.map(tech => (
                          <li>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className="project-links">
                      {github && (
                        <a href={github}>
                          <img className="svg" src={Github} alt="github" />
                        </a>
                      )}
                      {external && (
                        <a href={external} className="external">
                          <img className="svg" src={External} alt="external" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="project-image">
                    <a
                      className="layer"
                      href={external ? external : github ? github : "#"}
                    >
                      <Img
                        fluid={cover.childImageSharp.fluid}
                        alt={title}
                        className="img"
                      />
                    </a>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export default Featured
