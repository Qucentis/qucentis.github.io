import React from "react"
import Link from "gatsby-link"

const IndexPage = () => (
  <div className="pa5-l">
    <div className="SC:header bg-blue pa3 lh-copy ph4-l mb3-l white f4 code b br2-l">
      Qucentis
    </div>
    <div className="SC:body bg-white pa3 ph4-l black-60 f4 code measure-wide-l">
      <Link className="link blue b" to="/nikhil">
        Nikhil Mohan
      </Link>{" "}
      isn't keen on leaving tech trail. Sorry, please back{" "}
      <Link to="/" className="link blue b">
        home
      </Link>.
    </div>
  </div>
)

export default IndexPage
