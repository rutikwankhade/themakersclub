import React from 'react';
import { Link } from 'react-router-dom'
import profileIcon from '../assets/icons/profile.svg'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton';
import logoutIcon from '../assets/icons/logout.svg'
import { logout } from '../actions/auth'



const Navbar = ({ isAuthenticated, loading, fullName, logout }) => {

    

    return (
        <div className="bg-white  p-4 flex">
            <Link to="/">
                <h1 className=" text-gray-600 text-2xl font-mono font-bold ">🎓 <span className="md:inline-block hidden">themakersclub</span></h1>
            </Link>
            <div className="flex ml-auto mr-2">


                {loading ? <Skeleton width={200} height={40} /> :
                    <div className="">
                        {!isAuthenticated ?
                            <div className="flex flex-row ml-auto mr-2">
                                <Link to="/login" className="mx-2">

                                    <button className="md:text-xl text-sm border-2 border-gray-600  font-bold text-gray-700 px-6 py-2 rounded">Login</button>
                                </Link>
                                <Link to="/signup" className="mx-2">
                                    <button className="md:text-xl text-sm border-2 border-gray-700 bg-gray-600 hover:bg-gray-700 font-bold text-white px-6 py-2 rounded">Create an account</button>
                                </Link>
                            </div>
                            :
                            <div className="flex ml-auto mr-4 ">
                                {/* <Link to={`/profile/`} > */}

                                    <div className="flex mx-2 border-2 px-2 py-1 rounded-full">
                                        <h1 className=" capitalize text-xl font-semibold mx-4 ">
                                            {fullName}
                                        </h1>
                                        <img src={profileIcon} alt="me" className="flex h-8 w-8 " />

                                    </div>


                                {/* </Link> */}
                                <img
                                    onClick={() => logout()}
                                    src={logoutIcon} alt="logout" className="cursor-pointer hover:bg-red-100 rounded-full flex h-10 w-10 p-1" />
                            </div>
                        }

                    </div>}
            </div>



        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    loading: state.authReducer.loading,

    fullName: state.authReducer.user && state.authReducer.user.name,

});

export default connect(
    mapStateToProps, { logout }
)(Navbar);