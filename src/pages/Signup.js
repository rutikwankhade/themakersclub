import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, Redirect } from 'react-router-dom'


import joinImg from '../assets/images/join.png'
import { connect } from 'react-redux'
import { register as signup,login } from '../actions/auth';
import { editProfile } from '../actions/profile';



const Signup = ({ signup,login, isAuthenticated, editProfile }) => {

    const [error, setError] = useState('')
    const { register, handleSubmit } = useForm();

    const handleSignup = data => {

        const { name, email, password } = data
        if (data.password !== data.confirmPassword) {
            setError('Passwords didnt match.')

        }
        console.log(data);
        signup({ name, email, password });

        let userName = name.split(' ').join('').toLowerCase();

        const profile = {
            bio: '',
            website: '',
            twitter: '',
            github: '',
            linkedin: '',
            username: userName
        }
        editProfile(profile);

    }

       const handleGuestLogin = () => {
        const guestEmail = "mark@gmail.com"
        const guestPassword="123456"
         
        login(guestEmail, guestPassword);
        // console.log(data);
    }

    if (isAuthenticated) {
        return <Redirect to="/edit-profile" />
    }


    return (
        <div>
            <div className=" md:p-10 p-4 bg-gray-50 rounded">
                <div>

                    <div className="flex md:flex-row flex-col ">

                        <form onSubmit={handleSubmit(handleSignup)}
                            className=" bg-white md:w-5/12 md:h-5/6 p-10 md:mx-10 flex flex-col border-2  rounded-md">
                            <h1 className="text-2xl font-semibold">🎓 Join the makersclub</h1>

                            <p className="text-red-300 py-2 text-center">{error}</p>

                            <input
                                required
                                type="text"
                                placeholder="Name"
                                className="text-lg m-2 bg-gray-100 py-2 px-4 w-full rounded"
                                {...register("name")}
                            />

                            <input
                                required
                                type="email"
                                placeholder="Email"
                                className="text-lg m-2 bg-gray-100 px-4 py-2 w-full rounded"
                                {...register("email")}
                            />

                            <input
                                required
                                type="password"
                                placeholder="Password"
                                className="text-lg m-2 bg-gray-100 px-4 py-2 w-full rounded"
                                {...register("password")}
                            />

                            <input
                                required
                                type="password"
                                placeholder="Confirm password"
                                className="text-lg m-2 bg-gray-100 px-4 py-2 w-full rounded"
                                {...register("confirmPassword")}

                            />
                            <button
                                type="submit"
                                className="text-lg  w-full m-2 bg-purple-400 hover:bg-purple-500 font-semibold text-white px-6 py-2 rounded">Sign up
                            </button>

                            <button
                                    onClick={()=>handleGuestLogin()}
                                    className="flex text-lg w-full justify-center m-2 bg-gray-600 hover:bg-gray-700 font-semibold text-white px-6 py-2 rounded">
                                    Continue as a Guest 
                            </button>
                            
                            <Link to="/login" className="hover:underline focus:outline-none text-center text-purple-400 font-semibold mx-4">
                                Already a user? Login
                            </Link>
                        </form>




                        <img src={joinImg} alt="join now" className="md:w-1/2 h-full md:mt-0 mt-10" />

                    </div>

                </div>

            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(
    mapStateToProps,
    { signup,login, editProfile }
)(Signup);