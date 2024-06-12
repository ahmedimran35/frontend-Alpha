import { BsTwitterX } from "react-icons/bs";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function SocialMediaIcons() {
  return (
    <div className="  md:w-1/3  flex flex-row items-center justify-center md:justify-start gap-2 lg:gap-5">
      <Link
        className="hover:brightness-75"
        to="https://twitter.com/ytshops"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitterX
          className="text-3xl"
          to="https://twitter.com/ytshops"
          target="_blank"
          rel="noopener noreferrer"
        />
      </Link>
      <Link
        className="hover:brightness-75"
        to="https://www.youtube.com/@YTShopsHQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className="text-3xl" />
      </Link>
      <Link
        className="hover:brightness-75"
        to="https://discord.gg/gQTnzGweWv"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDiscord className="text-3xl" />
      </Link>
      <Link
        className="hover:brightness-75"
        to="https://www.instagram.com/ytshopshq/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-3xl" />
      </Link>
      <Link
        className="hover:brightness-75"
        to="https://www.linkedin.com/company/ytshops"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="text-3xl" />
      </Link>
    </div>
  );
}

export default SocialMediaIcons;
