import { useContext } from "react";
import { ResponsivenessContext } from "../Providers/ResponsivenessProvider";

const useResponsiveness = () => {
  const responsivenessContextCall = useContext(ResponsivenessContext);
  return responsivenessContextCall;
};

export default useResponsiveness;
