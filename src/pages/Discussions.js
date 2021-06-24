import React from 'react';

import profileImg from '../assets/icons/profile.svg'
const Discussions = () => {
    return (
        <div className="bg-gray-50">
            {/* <div className="px-10 text-white bg-gradient-to-l from-purple-500 via-purple-400 to-purple-300 p-4 rounded-xl ">
                <h1 className="text-center text-2xl font-semibold">Discussions</h1>
            </div> */}




            {/* <div className=" bg-pink-100 p-4 rounded border-l-8 border-pink-200">
                    <h1 className="text-2xl font-semibold">Discussions</h1>
                    <p className="text-lg py-2">Start a discuusion thread on a topic and invite people to share their thoughts and ideas.</p>
                </div> */}

            {/* <div className="bg-white rounded w-6/12 border-2 mx-4 p-2 pr-8 ">
                    <textarea
                        placeholder="// Start a discussion"
                        className="rounded focus:outline-none text-xl  px-4 py-2 w-full bg-purple-50 m-2" />

                    <button className="flex ml-auto mr-1 font-bold text-lg bg-purple-400 text-white p-1 px-6 rounded-md">Post</button>
                </div> */}




            <div className="bg-gray-50 py-2 flex flex-row">



                <div className="flex flex-col bg-gray-50 justify-center w-8/12 ">

                  
                    <div className="border-2 p-6 rounded-md bg-white">
                        <h1 className="text-2xl font-semibold">What are tools required to start blogging?</h1>
                        <p className="text-xl p-2">I have been looking for resources that are really good for use in our database. share please your thoughts...</p>

                        <div className="flex flex-row mt-2">

                            <div className="flex">
                                <img src={profileImg} alt="profile" className="h-8 w-8" />
                                <span className="text-md m-1">Rutik Wankhade</span>

                            </div>
                            <span className="ml-auto mr-2 border-2 px-2 rounded">0 replies</span>
                        </div>
                    </div>


                    <div className="border-2 p-6 rounded-md bg-white">
                        <h1 className="text-2xl font-semibold">What are tools required to start blogging?</h1>
                        <p className="text-xl p-2">I have been looking for resources that are really good for use in our database. share please your thoughts...</p>

                        <div className="flex flex-row mt-2">

                            <div className="flex">
                                <img src={profileImg} alt="profile" className="h-8 w-8" />
                                <span className="text-md m-1">Rutik Wankhade</span>

                            </div>
                            <span className="ml-auto mr-2 border-2 px-2 rounded">0 replies</span>
                        </div>
                    </div>

                </div>

                <div className="w-4/12 ">
                    <div className="sticky top-20 m-4 bg-purple-400 text-white rounded-full text-center p-2 text-2xl font-semibold">Start a discussion</div>

                    <div className=" sticky top-36 m-4 bg-pink-100 p-4 rounded border-l-8 border-pink-200">
                        <h1 className="text-2xl font-semibold">Discussions</h1>
                        <p className="text-lg py-2">Start a discuusion thread on a topic and invite people to share their thoughts and ideas.</p>
                    </div>

                </div>



            </div>


        </div>
    );
}

export default Discussions;