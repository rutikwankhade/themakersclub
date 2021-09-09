import React from 'react';
import { NavLink } from 'react-router-dom'

import trophyIcon from '../assets/icons/trophy.svg'
import rocketIcon from '../assets/icons/rocket.svg'
import discussIcon from '../assets/icons/discuss.svg'
import resourceIcon from '../assets/icons/resource.svg'

const Sidebar = () => {
    return (
        <div className="md:sticky md:top-10 fixed inset-x-0 bottom-0 justify-center z-20 bg-white rounded-xl mx-2 md:w-20 flex md:flex-col flex-row md:py-10 ">



            <NavLink to="/showcase-feedback" className="pl-1" activeClassName="bg-purple-100 rounded" >
                <img src={rocketIcon} alt="Home" className="w-14 h-14 m-2  p-2 rounded" />
            </NavLink>

            <NavLink to="/discussions" className="pl-1" activeClassName="bg-purple-100 rounded" >
                <img src={discussIcon} alt="Home" className="w-14 h-14 m-2  p-2 rounded" />
            </NavLink>

            <NavLink to="/resources" className="pl-1" activeClassName="bg-purple-100 rounded" >
                <img src={resourceIcon} alt="Home" className="w-14 h-14 m-2  p-2 rounded" />
            </NavLink>

            <NavLink to="/leaderboard" className="pl-2" >
                <img src={trophyIcon} alt="Home" className="w-14 h-14 m-2  p-2 rounded" />
            </NavLink>

        </div>
    );
}

export default Sidebar;