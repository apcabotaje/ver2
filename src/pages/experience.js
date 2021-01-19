import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Experience = () => {
  return (
    <Layout>
      <SEO title="Experience" />
      <div className="exp">
        <div id="page-title">
          <h1>Experience</h1>
          <div className="divider"></div>
        </div>

        <div className="exp-content">
          <div className="exp-content-1">
            <p>
              Hello! I'm Ayman, a software engineer based in Bulacan,
              Philippines.
            </p>
            <p>
              I have been doing software development for about 3-years now,
              since then I never stop producing personal projects. I've been a
              startup company that helps me to grow my software development
              skills exponentially, since then I never stop creating personal
              projects for myself, for my church and my community.
            </p>
            <p>
              I've also been in a Web Development Bootcamp to be a Full Stack
              Developer. Being Full Stack, it is a steep learning curve working
              from front-end to backend and trying other frameworks, but my
              driving passion to fulfill my purpose keeps me motivated.
            </p>
            <p>Here are some technologies I've been working with recently:</p>
            <ul className="skill-list">
              <li>Javascript (ES6+)</li>
              <li>HTML &amp; (S)CSS</li>
              <li>React</li>
              <li>Python</li>
              <li>Node.js</li>

              <li>WordPress</li>
            </ul>
          </div>
          <div className="exp-content-2">
            <div className="gif">GIF</div>
            {/* <img className="gif"/> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Experience
