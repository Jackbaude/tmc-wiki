import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
const Header = ({ siteTitle }) => (
  <header>
    <h1> Hekate Wiki </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
