import React from "react"
import { Link } from "gatsby"

export default ({siteTitle}) => (
  <footer
    style={{
      backgroundColor: `#666600`,
      minHeight: `5vh`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
      className="row"
    >
      <Link to="/" style={{flex:2}} className="col footer-text">{siteTitle}</Link>
      <span className="col footer-text">|</span> 
      <Link to="/" className="col footer-text">Home</Link>
      <Link to="/about" className="col footer-text">About</Link>
      <Link to="/location" className="col footer-text">Location</Link>
      <Link to="/partners" className="col footer-text">Partners</Link>
    </div>
  </footer>
)
