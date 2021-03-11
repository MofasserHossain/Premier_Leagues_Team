import React from 'react';
import './SocialIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
const SocialIcon = () => {
  return (
    <div className="team__socialIcon text-center my-3">
      <span>
        <a target="_" href="https://www.facebook.com/Mofasser.Hossain.Mahfuj/">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </span>
      <span>
        <a target="_" href="https://twitter.com/MofasserHossai6">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </span>
      <span>
        <a target="_" href="https://youtube.com">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </span>
    </div>
  );
};

export default SocialIcon;
