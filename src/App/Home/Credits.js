import React from "react"

export function Credits({ name, image, date, profile }) {
  return (
    <div className="flex cv mb4">
      <a href={profile}>
        <img src={image} alt={name} className="v-mid h2 br-100 mr2" />
      </a>
      <div className="sans-serif">
        <a href={profile} className="link">
          <div className="mb1 f6 fw5">{name}</div>
        </a>
        <div className="f7 black-80 fw4">{date}</div>
      </div>
    </div>
  )
}
