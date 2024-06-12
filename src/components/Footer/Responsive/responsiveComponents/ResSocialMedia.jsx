import {
  FaYoutube,
  FaDiscord,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

const ResSocialMedia = () => {
  return (
    <div className=" mt-5 space-y-10">
      <h3 className="text-center text-white">Social Media</h3>
      <div className="flex flex-row items-center justify-center gap-6">
        <Link    to="https://twitter.com/ytshops"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitterX className="text-3xl text-white" />
        </Link>
        <Link  to="https://www.youtube.com/@YTShopsHQ"
        target="_blank"
        rel="noopener noreferrer"
      >
          <FaYoutube className="text-3xl text-white" />
        </Link>
        <Link  to="https://discord.gg/gQTnzGweWv"
        target="_blank"
        rel="noopener noreferrer"
      >
          <FaDiscord className="text-3xl text-white" />
        </Link>
        <Link to="https://www.instagram.com/ytshopshq/"
        target="_blank"
        rel="noopener noreferrer"
      >
          <FaInstagram className="text-3xl text-white" />
        </Link>
        <Link to="https://www.linkedin.com/company/ytshops"
        target="_blank"
        rel="noopener noreferrer"
      >
          <FaLinkedinIn className="text-3xl text-white" />
        </Link>
      </div>
    </div>
  );
};

export default ResSocialMedia;
