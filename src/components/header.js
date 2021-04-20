import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgba(191, 78, 89, 1)`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.45rem 1.0875rem`,
        alignItems: `center`
      }}
      className="row"
    >
      <div className="col" style={{flex: 1, margin:0}}>
    <StaticImage
      src="../images/Troop7Scouts1922.gif"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Troop71922"
    />
    </div>
      <h1 style={{ margin: 0, flex:2 }} className="col">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
