import React from 'react'
import ReactMarkdown from "react-markdown"

export function Post({ children }) {
  return (
    <ReactMarkdown
      className="vollkorn f4 lh-copy black-80 measure"
      source={children}
      renderers={{
        code: CodeRenderer
      }}
    />
  )
}

const DefaultCodeRenderer = ReactMarkdown.renderers.code

const CodeRenderer = props => {
  return (
    <div className="bg-black-10 br2 ph3 pv1">
      <DefaultCodeRenderer {...props} />
    </div>
  )
}