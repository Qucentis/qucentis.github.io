import React from "react"
import Link from "gatsby-link"

const IndexPage = () => (
  <div>
    <h1>Qucentis</h1>
    <p>This is a simple SSR based site</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
