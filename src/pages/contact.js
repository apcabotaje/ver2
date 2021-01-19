import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact Me" />
      <div className="contact">
        <div id="page-title">
          <h1>Contact</h1>
          <div className="divider"></div>
        </div>
        <div className="contact-details">
          <h1>Get In Touch</h1>
          <p>Any projects you are working on or in mind? Let's collaborate.</p>
          <div className="contact-btn">
            <a id="email-link" href="mailto:apcabotaje@gmail.com">
              Let's Make It Happen
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
