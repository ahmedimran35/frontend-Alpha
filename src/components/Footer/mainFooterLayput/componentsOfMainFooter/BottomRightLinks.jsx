import { Link } from "react-router-dom";

const BottomRightLinks = () => {
    return (
        <div className="md:w-1/3 flex flex-row gap-3 my-auto justify-center md:justify-end">
          <button className="hove:font-semibold hover:text-white">
            Community
          </button>
          <Link to="/faq">          
            <button className="hove:font-semibold hover:text-white">FAQ</button>
          </Link>
        </div>
    );
};

export default BottomRightLinks;