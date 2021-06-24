import React from 'react';
import { NavLink } from 'react-router-dom'

import homeIcon from '../assets/icons/home.svg'
import rocketIcon from '../assets/icons/rocket.svg'
import discussIcon from '../assets/icons/discuss.svg'
import resourceIcon from '../assets/icons/resource.svg'

const Sidebar = () => {
    return (
        <div className="sticky top-10 rounded-xl mx-2 w-20 flex flex-col py-10 ">

            <NavLink to="/" className="pl-2" >
                <img src={homeIcon} alt="Home" className="w-14 h-14 m-2  p-2 rounded" />
            </NavLink>

            <NavLink to="/showcase-feedback" className="pl-1" activeClassName="bg-pink-100 rounded" >
                <img src={rocketIcon} alt="Home" className="w-14 h-14 m-2  p-2 rounded" />
            </NavLink>

            <NavLink to="/discussions" className="pl-1" activeClassName="bg-pink-100 rounded" >
                <img src={discussIcon} alt="Home" className="w-14 h-14 m-2  p-2 rounded" />
            </NavLink>

            <NavLink to="/resources" className="pl-1" activeClassName="bg-pink-100 rounded" >
                <img src={resourceIcon} alt="Home" className="w-14 h-14 m-2  p-2 rounded" />
            </NavLink>

        </div>
    );
}

export default Sidebar;