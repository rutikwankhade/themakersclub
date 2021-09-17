import React from 'react';
import userImg from '../assets/icons/profile.svg'
const EditProfile = () => {
    return (
        <div className="bg-gray-100 p-10">

            <div>


                <form className="flex flex-col  bg-white p-10 px-20 border md:w-10/12">
                    <h1 className="text-2xl font-semibold mb-6">Edit Profile</h1>

                    <div className="flex items-center  my-2">
                        <img src={userImg} alt="user" className="w-20 h-20" />
                        <input type="file" className="px-6"></input>
                    </div>



                    <div className=" flex items-center w-10/12">
                        <h1 className="text-xl mr-7 text-gray-600">Website</h1>
                        <input
                            placeholder="https://rutikwankhade.dev"
                            className="text-xl w-full  border bg-gray-50 p-2 m-2 rounded"
                        />
                    </div>


                    <div className=" flex items-center w-10/12">
                        <h1 className="text-xl mr-10 text-gray-600">Twitter</h1>
                        <input
                            placeholder="https://twitter.com/WankhadeRutik"
                            className=" text-xl w-full  border bg-gray-50 p-2 m-2 rounded"
                        />
                    </div>

                    <div className=" flex items-center w-10/12">
                        <h1 className="text-xl mr-10 text-gray-600">Github</h1>
                        <input
                            placeholder="https://github.com/rutikwankhade"
                            className="text-xl w-full  border bg-gray-50 p-2 m-2 rounded"
                        />
                    </div>

                    <div className=" flex items-center w-10/12">
                        <h1 className="text-xl mr-6 text-gray-600">Linkedin</h1>
                        <input
                            placeholder="https://www.linkedin.com/in/rutik-wankhade/"
                            className="text-xl w-full  border bg-gray-50 p-2 m-2 rounded"
                        />
                    </div>

                    <button className="text-xl bg-purple-400 text-white rounded px-6 py-2 w-1/4 mt-2">Update</button>


                </form>
            </div>

        </div>
    );
}

export default EditProfile;