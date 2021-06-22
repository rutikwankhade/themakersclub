import React, {useState} from 'react';
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
            <div className="m-20">
                <h1 className="text-4xl font-semibold">Join the makersclub</h1>
                <div>

                    <div className="flex md:flex-row flex-col">
                        <form onSubmit={handleSubmit(onSubmit)}
                            className="md:w-1/2 py-10 px-6">
                        
                            <p className="text-red-300 py-2 text-center">{error}</p>

                            <input
                                type="text"
                                placeholder="Name"
                                className="mb-2 bg-gray-100 p-2 w-full rounded"
                                {...register("name")}
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="mb-2 bg-gray-100 p-2 w-full rounded"
                                {...register("email")}
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="mb-2 bg-gray-100 p-2 w-full rounded"
                                {...register("password")}
                            />

                            <input
                                type="password"
                                placeholder="Confirm password"
                                className=" mb-2 bg-gray-100 p-2 w-full rounded"
                                {...register("confirmPassword")}

                            />
                            <button
                                type="submit"
                                className="m-1 mt-2 bg-indigo-400 hover:bg-indigo-500 font-semibold text-white px-6 py-2 rounded">Sign up</button>
                            <span className="text-indigo-400 font-semibold mx-4">Already a user? Login</span>
                        </form>

                        <img src={joinImg} alt="join now" className="md:w-1/2" />

                    </div>



                </div>

            </div>
        </div>
    );
}

export default Signup;