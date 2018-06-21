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
      </Link>,{" "}
      <a
        href="https://github.com/rakeshbs"
        className="blue b link"
        target="_blank"
      >
        Rakesh BS
      </a>{" "}
      &{" "}
      <a
        className="blue link b"
        href="https://twitter.com/JikkuJose"
        target="_blank"
      >
        Jikku Jose
      </a>{" "}
      is Qucentis.
    </div>
    <div className="SC:body bg-white pa3 ph4-l black-60 f4 code measure-wide-l">
      We are passionate about blockchain, deep learning & UX. We help businesses
      tackle their hard tech problems.
    </div>
    <div className="SC:body bg-white pa3 ph4-l black-60 f4 code measure-wide">
      Discuss your tech issue with us, lets see whether we can suggest a
      solution.
    </div>
    <div className="SC:body bg-white pa3 ph4-l black-60 f4 code measure-wide b">
      <a href="mailto:hello@qucentis.com" className="link blue b">
        hello@qucentis.com
      </a>
    </div>
  </div>
)

export default IndexPage
