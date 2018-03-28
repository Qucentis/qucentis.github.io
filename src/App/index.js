import React from "react"

import SiteWrapper from "../core/SiteWrapper"
import { Home } from "./Home"

export class App extends React.Component {
  render() {
    return (
      <SiteWrapper>
        <Home />
      </SiteWrapper>
    )
  }
}
