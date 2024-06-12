import { useEffect } from 'react';

function DisableContextMenu({ children }) {
    useEffect(() => {
        const handleContextmenu = (event) => {
            event.preventDefault();
        };

        document.addEventListener('contextmenu', handleContextmenu);

        return () => {
            document.removeEventListener('contextmenu', handleContextmenu);
        };
    }, []);

    return children;
}

export default DisableContextMenu;
