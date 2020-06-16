import React from "react"
import {Link} from "gatsby"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Footer = ({post}) => (
    <div>
    <footer class="page-footer font-small special-color-dark pt-4">
      <div class="container">
        <ul class="list-unstyled list-inline text-center">

          <li class="list-inline-item">
            <a class="btn-floating btn-fb mx-1" href="https://github.com/Jackbaude" target="_blank"rel="noreferrer noopener">
              <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
          </li>

          <li class="list-inline-item">
            <a class="btn-floating btn-tw mx-1" href="https://discord.gg/8GzJQT5" target="_blank"rel="noreferrer noopener">
              <FontAwesomeIcon icon={faDiscord} size="2x"/>
            </a>
          </li>

          <li class="list-inline-item">
            <a class="btn-floating btn-gplus mx-1" href="https://www.youtube.com/channel/UCLKbU3v59ccY834d1Dg5j9w"target="_blank"rel="noreferrer noopener">
              <FontAwesomeIcon icon={faYoutube} size="2x"/>
            </a>
          </li>

          <li class="list-inline-item">
            <a class="btn-floating btn-li mx-1">
              <i class="fab fa-linkedin-in"> </i>
            </a>
          </li>

          <li class="list-inline-item">
            <a class="btn-floating btn-dribbble mx-1">
              <i class="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>

      </div>

      <div class="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> wiki.hekatemc.com</a>
      </div>
    </footer>
    </div>
)

export default Footer
