import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="bg-white  p-4 flex">
            <Link to="/">
                <h1 className=" text-gray-600 text-2xl font-mono font-bold ">🎓 themakersclub</h1>
            </Link>
            <Link to="/signup" className="ml-auto mr-2">

                <button className="  bg-gray-600 hover:bg-gray-700 font-semibold text-white px-6 py-2 rounded">Register</button>
            </Link>
        </div>
    );
}

export default Navbar;