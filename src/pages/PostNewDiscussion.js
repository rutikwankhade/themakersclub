import React from 'react';
const PostNewDiscussion = () => {
    return (
        <div className="">
            
            <div className="m-10 w-8/12 ">
            <h1 className="text-2xl font-semibold my-4">Post a discussion</h1>
            <div className="flex flex-col justify-center ">
                <input
                    type="text"
                    placeholder="Ask a question or share something"
                    className="px-6 rounded bg-gray-50 p-2 text-xl border-2 focus:outline-none m-2"
                />
                    <textarea
                     placeholder="// Start typing..."
                    className="px-6 p-2 rounded bg-gray-50 text-xl h-60 border-2 focus:outline-none m-2"
                    />
                
                <button className=" w-40 m-2 text-xl bg-purple-400 text-white p-2 px-6 rounded-md">Post</button>
                </div>
                
                </div>

        </div>
     );
}
 
export default PostNewDiscussion;