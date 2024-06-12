/**
 * A simple back home button
 * @returns a react render for backhome button
*/
import { buttonClass } from "./BackHomeButton.constants";
const BackHomeButton = () => {
    return (
        <button className={buttonClass}>
          <span>Back Home</span>
        </button>
    );
};


export default BackHomeButton;