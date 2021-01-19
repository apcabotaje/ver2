import React from "react"
import { Link, useStaticQuery, graphql, withPrefix } from "gatsby"
import Img from "gatsby-image"

//------Dashboard Logo------//
import ExpLogo from "../svg/exp4-logo.svg"
import FPLogo from "../svg/fp-logo.svg"
import OPLogo from "../svg/op-logo.svg"
import ContactLogo from "../svg/contact-logo.svg"

//------Footer Logo------//
import GHLogo from "../svg/github-logo.svg"
import LILogo from "../svg/linkedin3-logo.svg"
import InstaLogo from "../svg/insta3-logo.svg"
import CWLogo from "../svg/cw-logo.svg"

const Dashboard = () => {
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Link to="/" className="user">
        <Img
          className="display-picture"
          fluid={data.me.childImageSharp.fluid}
        />
        <h1>Ayman Cabotaje</h1>
        <p>Software Engineer</p>
      </Link>
      <div className="navigation">
        <Link to="/experience" className="link">
          <img className="svg" src={ExpLogo} alt="experience" />
          <h2>Experience</h2>
        </Link>
        <Link to="/featured" className="link">
          <img className="svg" src={FPLogo} alt="featured-projects" />
          <h2>Featured Projects</h2>
        </Link>
        <Link to="/other" className="link">
          <img className="svg" src={OPLogo} alt="other-projects" />
          <h2>Other Projects</h2>
        </Link>
        <Link to="/contact" className="link">
          <img className="svg" src={ContactLogo} alt="contact-me" />
          <h2>Contact</h2>
        </Link>
      </div>
      <div>
        <div className="dashboard-footer">
          <div className="social-links">
            <Link
              className="social-link"
              rel="noreferrer"
              target="_blank"
              to="https://github.com/apcabotaje"
            >
              <img src={GHLogo} alt="github" />
            </Link>
            <Link
              className="social-link"
              rel="noreferrer"
              target="_blank"
              to="https://www.linkedin.com/in/apcabotaje/"
            >
              <img src={LILogo} alt="linked-in" />
            </Link>
            <Link
              className="social-link"
              rel="noreferrer"
              target="_blank"
              to="https://www.instagram.com/namyaification/"
            >
              <img src={InstaLogo} alt="instagram" />
            </Link>
            <Link
              className="social-link"
              rel="noreferrer"
              target="_blank"
              to="https://www.codewars.com/users/apcabotaje"
            >
              <img src={CWLogo} alt="codewars" />
            </Link>
          </div>
          <div className="resume-btn">
            <a
              className="resume"
              rel="noreferrer"
              target="_blank"
              href={withPrefix("/Ayman_Cabotaje-Resume.pdf")}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
