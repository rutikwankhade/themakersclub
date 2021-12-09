import React from 'react';
import { useForm } from "react-hook-form";
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';


import joinImg from '../assets/images/join.png'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import Loader from '../components/Loader';


const Login = ({ login, isAuthenticated,loading }) => {

    // const [error, setError] = useState('')
    const { register, handleSubmit } = useForm();


    const handleLogin = data => {
        const { email, password } = data;
        login(email, password);
        console.log(data);
    }

    const handleGuestLogin = () => {
        const guestEmail = "mark@gmail.com"
        const guestPassword="123456"
         
        login(guestEmail, guestPassword);
        // console.log(data);
    }

  
   
if (isAuthenticated) {
    return <Redirect to="/showcase-feedback" />;
}



    return (
        <div>
            <div className=" md:p-10 p-4 bg-gray-50 rounded">
                <div>

                    <div className="flex md:flex-row flex-col ">
                        {

                            <form onSubmit={handleSubmit(handleLogin)}
                                className=" bg-white md:w-5/12 p-10 md:h-5/6 md:my-10 md:mx-10 flex flex-col justify-center border-2  rounded-md">
                                <h1 className="text-2xl font-semibold py-2">👋 Welcome back</h1>

                                {/* <p className="text-red-300 py-2 text-center">{error}</p> */}

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

                                    

                                <button
                                    type="submit"
                                    className="flex text-lg w-full justify-center m-2 bg-purple-400 hover:bg-purple-500 font-semibold text-white px-6 py-2 rounded">
                                    Login {loading?<Loader />:<span></span>}
                                </button>

                                 <button
                                    onClick={()=>handleGuestLogin()}
                                    className="flex text-lg w-full justify-center m-2 bg-gray-600 hover:bg-gray-700 font-semibold text-white px-6 py-2 rounded">
                                    Continue as a Guest {loading?<Loader />:<span></span>}
                                </button>
                                <Link to="/signup" className="focus:outline-none hover:underline text-center text-purple-400 font-semibold mx-4">
                                    Don't have an account? Register
                                </Link>
                            </form>

                        }

                        <img src={joinImg} alt="join now" className="md:w-1/2 h-full md:mt-0 mt-10" />

                    </div>

                </div>

            </div>
        </div>
    );
}


Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
        loading: state.authReducer.loading

});

export default connect(
    mapStateToProps,
    { login }

)(Login);