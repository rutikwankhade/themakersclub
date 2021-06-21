import React from 'react';

import homeIcon from '../assets/icons/home.svg'
import rocketIcon from '../assets/icons/rocket.svg'
import discussIcon from '../assets/icons/discuss.svg'
import resourceIcon from '../assets/icons/resource.svg'

const Sidebar = () => {
    return (
        <div className="bg-ehite rounded-xl mx-2 w-20 flex flex-col justify-center items-center">
            <img src={homeIcon} alt="Home" className="w-14 h-14 m-2 hover:bg-purple-100 p-2 rounded"/>
            <img src={rocketIcon} alt="Home" className="w-14 h-14 m-2 hover:bg-purple-100 p-2 rounded" />
            <img src={discussIcon} alt="Home" className="w-14 h-14 m-2 hover:bg-purple-100 p-2 rounded" />
            <img src={resourceIcon} alt="Home" className="w-14 h-14 m-2 hover:bg-purple-100 p-2 rounded" />

        </div>
    );
}

export default Sidebar;