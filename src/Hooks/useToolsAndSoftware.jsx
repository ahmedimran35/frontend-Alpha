import { useContext } from 'react';
import { CategoryToolsAndSoftwareContext } from '../Providers/ToolsAndSoftwareProvider';


const useToolsAndSoftwareCategory = () => {
    const categoryToolsAndSoftwareContextCall = useContext(CategoryToolsAndSoftwareContext);
    return categoryToolsAndSoftwareContextCall
};

export default useToolsAndSoftwareCategory;