import React from "react"

import "../styles/styles.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <h2>Hello, my name is</h2>
      <h1>Ayman Cabotaje</h1>
      <h3>
        I'm a Software Engineer based in Bulacan, Philippines. This is my
        personal portfolio, a show case of my work and abilities.
      </h3>
      <div className="home-btn">
        <a id="email-link" href="mailto:apcabotaje@gmail.com">
          Get In Touch
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
