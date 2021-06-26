import React from 'react';
import profileImg from '../assets/icons/profile.svg'
import ReactMarkdown from 'react-markdown';


const DiscussPostcard = ({ post: { postTitle, replies, userId, userName, postText } }) => {


    return (
        <div className="border-2 p-6 rounded-md bg-white">
            <h1 className="text-2xl font-semibold">{postTitle}</h1>
            <ReactMarkdown className="text-xl p-2">{`${postText.substring(0, 130)}..`}</ReactMarkdown>
            <div className="flex flex-row mt-2">

                <div className="flex">
                    <img src={profileImg} alt="profile" className="h-8 w-8" />
                    <span className="text-xl capitalize mx-2">{userName}</span>

                </div>
                <span className="ml-auto mr-2 border-2 px-2 rounded">{`${replies.length} replies`}</span>
            </div>
        </div>
    );
}

export default DiscussPostcard;