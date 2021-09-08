import React from 'react';
import { Link } from 'react-router-dom'


const ShowcasePostcard = ({ post: { id, showcaseTitle, showcaseUrl, userId, userName, showcaseText } }) => {


    return (
        <div className="border p-4 rounded-md bg-white hover:bg-purple-50">
            <Link to={`/posts/${id}`}>

                <div className="flex flex-row items-center">

                    <div className="md:w-10/12">
                        <h1 className=" capitalize text-xl px-4 font-semibold">{showcaseTitle && showcaseTitle}</h1>
                        <p className="text-lg p-4 mb-2 ">{showcaseText}</p>
                    </div>

                    <div className="w-20 h-20 ml-auto mr-2 text-2xl border flex flex-col justify-center items-center">
                        <span className="text-xl font-bold">12</span>
                        <span className="opacity-70">
                            ❤
                        </span>
                    </div>

                </div>
            </Link>


        </div>
    );
}

export default ShowcasePostcard;