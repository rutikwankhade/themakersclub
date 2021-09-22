import React from 'react';
import editIcon from '../assets/icons/edit.svg'
import {Link } from "react-router-dom"
const UserProfile = () => {
    return (
        <div>
            <div className="bg-pink-300 w-full h-24 p-4"></div>

            <div className=" border  rounded flex ">
                <div className="w-1/2 text-center">
                    <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1604889936661/rNhfwLkiu.png?w=400&h=400&fit=crop&crop=faces&auto=compress,format&format=webp"

                        alt="profile"
                        className="border-4 border-white w-32 h-32 rounded-full mx-auto transform -translate-y-12"
                    />
                    <div className="transform -translate-y-12 p-4">
                        <h1 className="text-2xl font-semibold">Rutik Wankhade</h1>
                        <p className="text-lg">An avid learner, I love building side projects</p>
                    </div>

                </div>


                <div className="flex items-center  justify-center shadow-sm border bg-white w-1/3 rounded-xl mx-4 h-40 transform -translate-y-10">

                    <div className="w-40 h-20 m-2  p-2 rounded text-center">
                        <h1 className="text-6xl font-bold">10</h1>
                        <span className="text-purple-400 text-xl font-semibold">Maker Points</span>
                    </div>
                    <h1 className="text-6xl font-bold">🚀</h1>

                </div>

                <div>
                    <Link to="/edit-profile">
                    <button className="border flex items-center px-4 py-2 text-indigo-400 font-semibold hover:text-indigo-500 rounded-full bg-white transform -translate-y-5">
                        <img src={editIcon} alt="edit" className="h-4 w-4 mr-2"/>
                        Edit Profile
                    </button>
                    </Link>
                </div>

            </div>


            {/* <div className="md:w-8/12 mx-auto">
                <div class="relative  mx-auto">

                <div class="border-r-4 border-purple-300  absolute h-full top-0" style={{ left: 20 }}></div>
             <div >
                
                        
                        <div class="flex flex-row items-center">
                    <div class="bg-purple-300 rounded-full h-10 w-10 ">💬</div>
                    <div class="flex flex-col  mx-4 p-2 hover:bg-gray-50 ">
                        <span className="w-1/2 text-pink-400 font-medium mr-2 border ">Started a discussion</span>
                        <h2 className="text-2xl font-medium text-gray-500">How to come up with side project ideas</h2>
                    </div>
                        </div>
                          
        </div>
                </div>
                 
            </div> */}
        </div>
    );
}

export default UserProfile;