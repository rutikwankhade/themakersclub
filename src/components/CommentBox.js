import React from 'react';
const CommentBox = () => {
    return (
        <div>
            <div className="border-2 p-6 bg-white my-4 rounded">
                <textarea
                    placeHolder="Say something nice..!"
                    className="w-full bg-gray-50 p-4 border-2 border-purple-300 text-xl focus:outline-none rounded my-2"
                />

                <button className="bg-gray-600 hover:bg-gray-700 rounded text-white px-6 py-2 text-xl ">Submit</button>
            </div>
        </div>
    );
}

export default CommentBox;