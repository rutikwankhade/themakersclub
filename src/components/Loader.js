import React from 'react';
import loaderIcon from '../assets/icons/loader.svg';
const Loader = () => {
    return (
        <img src={loaderIcon} alt="Loading..."
        className="h-8 w-8 mx-2 ml-auto mr-2 animate-spin"
        />
     );
}
 
export default Loader;