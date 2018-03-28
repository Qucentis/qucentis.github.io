import React from "react"

import NestedContainer from "../../core/NestedContainer"

import { Post } from "./Post"
import { Credits } from "./Credits"
import { Title } from "./StyledComponents"

import { credits, post } from "./data"

export class Home extends React.Component {
  render() {
    return (
      <NestedContainer className="ch pv4 pv5-ns ph3">
        <Credits {...credits} />
        <Title>{post.title}</Title>
        <Post>{post.content}</Post>
      </NestedContainer>
    )
  }
}
