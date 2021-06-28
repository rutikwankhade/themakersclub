import React from 'react';
const ResourceTag = ({tagName}) => {
    return (
        <span className="cursor-pointer font-semibold bg-pink-100 rounded-full px-4 py-2 m-1">{ tagName}</span>
     );
}
 
export default ResourceTag;