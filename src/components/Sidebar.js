import React from 'react';
import { Link } from 'react-router-dom'

import homeIcon from '../assets/icons/home.svg'
import rocketIcon from '../assets/icons/rocket.svg'
import discussIcon from '../assets/icons/discuss.svg'
import resourceIcon from '../assets/icons/resource.svg'

const Sidebar = () => {
    return (
        <div className="sticky top-10 rounded-xl mx-2 w-20 flex flex-col py-10 ">

            <Link to="/">
                <img src={homeIcon} alt="Home" className="w-14 h-14 m-2 hover:bg-purple-100 p-2 rounded" />
            </Link>

            <Link to="/showcase-feedback">
                <img src={rocketIcon} alt="Home" className="w-14 h-14 m-2 hover:bg-purple-100 p-2 rounded" />
            </Link>

            <Link to="/discussions">
                <img src={discussIcon} alt="Home" className="w-14 h-14 m-2 hover:bg-purple-100 p-2 rounded" />
            </Link>

            <Link to="/resources">
                <img src={resourceIcon} alt="Home" className="w-14 h-14 m-2 hover:bg-purple-100 p-2 rounded" />
            </Link>

        </div>
    );
}

export default Sidebar;