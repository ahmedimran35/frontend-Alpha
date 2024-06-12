import ResponsiveFooter from "./Responsive/ResponsiveFooter";
import MainFooterlayout from "./mainFooterLayput/MainFooterlayout";

const Footer = () => {
  return (
    <div>
      <div className=" hidden lg:contents">
        <div className="min-h-fit xl:h-[320px] bg-black">
          <MainFooterlayout />
        </div>
      </div>
      <div className="lg:hidden">
        <ResponsiveFooter />
      </div>
    </div>
  );
};

export default Footer;
