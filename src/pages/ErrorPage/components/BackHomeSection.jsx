import { Link } from "react-router-dom";
import BackHomeButton from "../../../components/buttons/BackHomeButton/BackHomeButton";

function BackHomeSection() {
    return (
      <div className="mt-5" role="section">
        <Link
          to={"/"}
          className="relative inline-block text-sm font-medium text-white group active:text-[#ff0000] focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#ff0000] group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <BackHomeButton />
          </span>
        </Link>
      </div>
    );
}
export default BackHomeSection;