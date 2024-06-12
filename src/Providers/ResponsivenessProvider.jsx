import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";
import { createContext, memo } from "react";

export const ResponsivenessContext = createContext();
const ResponsivenessProvider = memo(function ResponsivenessProviderComponent({
  children,
}) {
  const isSmallMobileView = useMediaQuery("(max-width: 375px)");
  const isMobileView = useMediaQuery(
    "(min-width: 376px) and (max-width: 900px)"
  );
  const isLaptopView = useMediaQuery(
    "(min-width: 900px) and (max-width: 1100px)"
  );
  const isDesktopView = useMediaQuery("(min-width: 1024px)");
  const isDesktopView2 = useMediaQuery("(min-width: 1030px)");

  const responsivenessInfo = {
    isSmallMobileView,
    isMobileView,
    isLaptopView,
    isDesktopView,
    isDesktopView2,
  };

  return (
    <ResponsivenessContext.Provider value={responsivenessInfo}>
      {children}
    </ResponsivenessContext.Provider>
  );
});

ResponsivenessProvider.propTypes = {
  children: PropTypes.node,
};

export default ResponsivenessProvider;
