import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons'
import Search from "./search"
const Nav = ({ post }) => (
  <nav className="navbar navbar-expand-lg">
    <a className="navbar-brand" href="/"><h5 className="brand-name display-4 animate__animated animate__flipInX"></h5></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/posts">Posts<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/Jackbaude" target="_blank"rel="noreferrer noopener"><FontAwesomeIcon icon={faGithub}/> Github</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="https://discord.gg/8GzJQT5" target="_blank"rel="noreferrer noopener"><FontAwesomeIcon icon={faDiscord}/> Discord</a>
            <a className="dropdown-item" href="https://www.youtube.com/channel/UCLKbU3v59ccY834d1Dg5j9w"target="_blank"rel="noreferrer noopener"> <FontAwesomeIcon icon={faYoutube}/> Youtube</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="www.hekatemc.com" target="_blank"rel="noreferrer noopener" >Main Website</a>
          </div>
        </li>
      </ul>
      {/*<form className="form-inline my-2 my-lg-0">*/}
      {/*  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>*/}
      {/*  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}

      {/*</form>*/}
      <StaticQuery
    query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
        }
      `}
    render={data => (
      <Search searchIndex={data.siteSearchIndex.index}/>
    )}
  />
    </div>
  </nav>
)

export default Nav
