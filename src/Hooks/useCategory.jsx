import { useContext } from 'react';
import { CategoryContext } from '../Providers/CategoryProvider';

const useCategory = () => {
    const categoryContextCall = useContext(CategoryContext);
    return categoryContextCall
};

export default useCategory;