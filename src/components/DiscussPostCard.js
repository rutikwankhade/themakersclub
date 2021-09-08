import React from 'react';
import profileImg from '../assets/icons/profile.svg'
import ReactMarkdown from 'react-markdown';
import discussIcon from '../assets/icons/discuss.svg'


const DiscussPostcard = ({ post: { postTitle, replies, userId, userName, postText } }) => {


    return (
        <div className="border p-6 rounded-md bg-white flex flex-row hover:bg-purple-50">
            <div className=" ">

                <div className="flex flex-row items-center md:w-10/12">
                    <h1 className="text-xl font-semibold">{postTitle}</h1>
                </div>
                <ReactMarkdown className="md:w-11/12 text-lg">{`${postText.substring(0, 130)}..`}</ReactMarkdown>


                <div className="flex flex-row items-center">
                    <img src={profileImg} alt="profile" className="h-6 w-6 m-2" />

                    <span className="text-md capitalize ">{userName}</span>
                </div>

            </div>

            <div class="flex flex-row items-center justify-center ml-auto mr-2 ">
                <span className="text-2xl font-bold">{replies.length} </span>
                <img src={discussIcon} alt="replies" className="h-8 w-8 m-1" />
            </div>

        </div>
    );
}

export default DiscussPostcard;