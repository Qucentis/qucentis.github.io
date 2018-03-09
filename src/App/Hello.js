import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from "react-markdown"

import NestedContainer from '../core/NestedContainer'

export class Hello extends React.Component {
  render() {
    return (
      <NestedContainer
        className="ch pv5 ph3"
        innerClassName=""
        innerCss=""
      >
        <Profile
          name="Alice Goonali"
          url="https://randomuser.me/api/portraits/women/42.jpg"
          date="December 4 2017"
        />
        <Title>{title}</Title>
        <ReactMarkdown
          className="vollkorn f4 lh-copy black-80 measure"
          source={post}
          renderers={{
            code: CodeRenderer
          }}
        />
      </NestedContainer>
    )
  }
}

function Profile({ name, url, date }) {
  return (
    <div className="flex cv mb4">
      <img src={url} className="v-mid h2 br-100 mr2" />
      <div className="sans-serif">
        <div className="mb1 f6 fw5">{name}</div>
        <div className="f7 black-80 fw4">{date}</div>
      </div>
    </div>
  )
}

const DefaultCodeRenderer = ReactMarkdown.renderers.code

const CodeRenderer = props => {
  return <div className="bg-black-10 br2 ph3 pv1"><DefaultCodeRenderer {...props} /></div>
}

const Title = styled.div.attrs({
  className: 'vollkorn lh-title f1'
}) ``

const Meta = styled.div.attrs({
  className: 'mt2 mb4 montserrat ttu black-40 f6'
}) ``

const title = "Start Here!"

const meta = "Jikku Jose ● November 29 2017"

const post = `
Simple starting point for React projects! Contains most frequently used libraries & their example implementations.

### How to start:

- Duplicate \`<Template />\` in \`./examples/\`
- Replace the template div with your component
- Import in \`App/index.js\`
- Replace \`<Hello />\` with your component
`