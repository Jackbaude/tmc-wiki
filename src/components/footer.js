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
            <a class="btn-floating btn-fb mx-1" href="https://github.com/Jackbaude/tmc-wiki" target="_blank"rel="noreferrer noopener">
              <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
          </li>

          <li class="list-inline-item">
            <a class="btn-floating btn-tw mx-1" href="https://discord.gg/FcTFg2E" target="_blank"rel="noreferrer noopener">
              <FontAwesomeIcon icon={faDiscord} size="2x"/>
            </a>
          </li>

          <li class="list-inline-item">
            <a class="btn-floating btn-gplus mx-1" href="https://www.youtube.com/channel/UCf9SYal_h3WSoksvxLYruuQ"target="_blank"rel="noreferrer noopener">
              <FontAwesomeIcon icon={faYoutube} size="2x"/>
            </a>
          </li>
        </ul>

      </div>

      <div class="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> technicalmc.xyz</a>
      </div>
    </footer>
    </div>
)

export default Footer
