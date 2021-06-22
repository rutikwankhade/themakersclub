import React from 'react';
import joinImg from '../assets/images/join.png'
const Signup = () => {
    return (
        <div>
            <div className="m-20">
                <h1 className="text-4xl font-semibold">Join the makersclub</h1>
                <div>


                    <div className="flex">
                        <form className="w-1/2 py-10 px-6">
                            <input type="text" placeholder="Name" className="m-1 bg-gray-100 p-2 w-full rounded" />
                            <input type="email" placeholder="Email" className="m-1 bg-gray-100 p-2 w-full rounded" />
                            <input type="password" placeholder="Password" className="m-1 bg-gray-100 p-2 w-full rounded" />
                            <input type="password" placeholder="Confirm password" className=" m-1 bg-gray-100 p-2 w-full rounded" />
                            <button className="m-1 mt-2 bg-indigo-400 hover:bg-indigo-500 font-semibold text-white px-6 py-2 rounded">Sign up</button>
                            <span className="text-indigo-400 font-semibold mx-4">Already a user? Login</span>
                        </form>

                        <img src={joinImg} className="w-1/2" />

                    </div>



                </div>

            </div>
        </div>
    );
}

export default Signup;