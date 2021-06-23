import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import joinImg from '../assets/images/join.png'
const Signup = () => {

    const [error, setError] = useState('')

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            setError('Passwords didnt match.')

        }
        console.log(data);
    }



    return (
        <div>
            <div className=" p-10 bg-gray-50 rounded">
                <div>

                    <div className="flex md:flex-row flex-col ">
                        <form onSubmit={handleSubmit(onSubmit)}
                            className=" bg-white w-5/12 p-10 mx-10 flex flex-col border-2  rounded-md">
                            <h1 className="text-2xl font-semibold">🎓 Join the makersclub</h1>

                            <p className="text-red-300 py-2 text-center">{error}</p>

                            <input
                                type="text"
                                placeholder="Name"
                                className="text-lg m-2 bg-gray-100 py-2 px-4 w-full rounded"
                                {...register("name")}
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="text-lg m-2 bg-gray-100 px-4 py-2 w-full rounded"
                                {...register("email")}
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="text-lg m-2 bg-gray-100 px-4 py-2 w-full rounded"
                                {...register("password")}
                            />

                            <input
                                type="password"
                                placeholder="Confirm password"
                                className="text-lg m-2 bg-gray-100 px-4 py-2 w-full rounded"
                                {...register("confirmPassword")}

                            />
                            <button
                                type="submit"
                                className="m-1 mt-2 bg-indigo-400 hover:bg-indigo-500 font-semibold text-white px-6 py-2 rounded">Sign up</button>
                            <span className="text-center text-indigo-400 font-semibold mx-4">Already a user? Login</span>
                        </form>

                        <img src={joinImg} alt="join now" className="md:w-1/2" />




                    </div>



                </div>

            </div>
        </div>
    );
}

export default Signup;