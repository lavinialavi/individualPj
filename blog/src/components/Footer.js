import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="py-6 px-2 bg-blue-300 flex item-center justify-center ">
      <a href="https://www.facebook.com/lavinia.budean" className="facebook social px-2 h-6">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a href="https://www.twitter.com" className="twitter social px-2 h-6">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a href="https://www.instagram.com/lavibudean" className="instagram social px-2 h-6">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
    <div id="go-top"><a className="smoothscroll" title="back to top" href="/home"><i className="icon-up-open"></i></a></div>
  </div>
  )
  }
  export default Footer