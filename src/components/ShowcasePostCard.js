import React from 'react';
import { Link } from 'react-router-dom'
import profileImg from '../assets/icons/profile.svg'
import linkIcon from '../assets/icons/link.svg'



const ShowcasePostcard = ({ post: { id,showcaseTitle, showcaseUrl, userId, userName, showcaseText } }) => {


    return (
        <div className="border p-6 my-2 rounded-md bg-white">
            <h1 className=" capitalize text-2xl px-4 font-semibold">{ showcaseTitle && showcaseTitle}</h1>

            <p className="text-xl p-4 mb-2 ">{showcaseText}</p>

            <div className="flex flex-row ">

                <div className="flex m-2">
                    <img src={profileImg} alt="profile" className="h-8 w-8" />
                    <span className="md:text-xl text-md capitalize mx-2">{userName}</span>
                </div>

                <div className="ml-auto mr-2 flex">
                    <a href={showcaseUrl} target="_blank" rel="noreferrer">
                        <img src={linkIcon} alt="profile" className=" cursor-pointer h-10 w-10 mx-4 bg-pink-100  hover:bg-purple-100 rounded-full p-2" />
                    </a>
                    <Link to={`/posts/${id}`}>
                        <button className="focus:outline-none bg-purple-100 font-semibold opacity-80 border-2 hover:border-purple-400 text-purple-600 md:text-xl text-sm rounded h-10 px-4">Feedback</button>
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default ShowcasePostcard;