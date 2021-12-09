import React from 'react';
import { Link } from 'react-router-dom'


const ShowcasePostcard = ({ post: { _id, title, url, user, name, desc,feedbacks } }) => {


    return (
        <div className="border p-4 rounded-md bg-white hover:bg-purple-50">
            <Link to={`/posts/${_id}`}>

                <div className="flex flex-row items-center">



                    <div className="md:w-10/12">
                        <h1 className=" capitalize text-2xl px-4 font-semibold">{title && title}</h1>
                        <p className="text-lg p-4 mb-2 ">{desc}</p>
                    </div>

                    {/* <div className="w-20 h-20 ml-auto mr-2 text-2xl border flex flex-col justify-center items-center">
                        <span className="text-xl font-bold">12</span>
                        <span className="opacity-70">
                            ❤
                        </span>
                    </div> */}

                    {/* <div className="p-2 w-1/3 my-2 border rounded shadow-sm">
                        <img src={`https://capture-website-api.herokuapp.com/capture?url=${url}`} alt="screenshot" className=" my-2" />
                    </div> */}

                    <div className="ml-auto mr-2 ">

                    {feedbacks.length ?
                        <div className="flex flex-col border border-t-4 p-2 rounded items-center">
                            <span className="text-2xl font-semibold "> {feedbacks.length} </span>
                            <span className="font-semibold text-sm text-gray-500">Feedbacks</span>
                        </div>
                        :
                        <div className=" border  rounded items-center p-1  bg-purple-400 hover:bg-purple-500 text-white">
                            <button className="font-semibold text-sm ">Give Feedback</button>
                        </div>
                    }
                                        </div>


                </div>
            </Link>


        </div>
    );
}

export default ShowcasePostcard;