import React from "react"

import Link from "gatsby-link"

export default () => (
  <div
    style={{
      background: "#f4f4f4",
      paddingTop: "10px",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/location">Location</Link>
      </li>
      <li>
        <a
          href="https://www.scouting.org/"
          rel="nofollow noreferrer"
          target="_new"
        >
          BSA
        </a>
      </li>
    </ul>
  </div>
)
