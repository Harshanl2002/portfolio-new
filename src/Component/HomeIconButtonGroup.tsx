import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const HomeIconButtonGroup: React.FC = () => {
  return (
    <div className="flex gap-10 mt-4">
      <a
        className="btn btn-primary btn-circle text-2xl"
        href="https://github.com/Harshanl2002"
        target="blank"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className="btn btn-primary btn-circle text-2xl btn-outline"
        href="https://www.linkedin.com/in/harshanl/"
        target="blank"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        className="btn btn-primary btn-circle text-2xl"
        href="https://wa.me/6369613753"
        target="blank"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};
