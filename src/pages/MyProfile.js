import React from 'react';
const MyProfile = () => {
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

            </div>


            <div className="flex flex-row">
                <div className="w-1/2 m-4 border h-40">
                    <h1 className="text-xl">Projects built</h1>
                </div>

                <div className="w-1/2 m-4 border">
                    <h1 className="text-xl">Discussions</h1>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;