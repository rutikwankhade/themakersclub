import React from 'react';
import { Link } from 'react-router-dom'
import profileIcon from '../assets/icons/profile.svg'
import { connect } from 'react-redux'

const Navbar = ({ isAuthenticated, userName }) => {
    return (
        <div className="bg-white  p-4 flex">
            <Link to="/">
                <h1 className=" text-gray-600 text-2xl font-mono font-bold ">🎓 themakersclub</h1>
            </Link>


            {!isAuthenticated ?
                <div className="flex flex-row ml-auto mr-2">
                    <Link to="/login" className="mx-2">

                        <button className="border-2 border-gray-600  font-bold text-gray-700 px-6 py-2 rounded">Login</button>
                    </Link>
                    <Link to="/signup" className="mx-2">

                        <button className=" border-2 border-gray-700 bg-gray-600 hover:bg-gray-700 font-bold text-white px-6 py-2 rounded">Create an account</button>
                    </Link>
                </div>
                :
                <div className="flex ml-auto mr-4 border-2 px-2 py-1 rounded-full">
                    <h1 className=" capitalize text-xl font-semibold mx-4 ">
                        {userName}
                    </h1>
                    <img src={profileIcon} alt="me" className="flex h-8 w-8 " />
                </div>
            }

        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    userName: state.authReducer.user && state.authReducer.user.data[0].username
});

export default connect(
    mapStateToProps
)(Navbar);