import React from 'react';
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';


import { addDiscussPost } from '../actions/discussPost';


const PostNewDiscussion = ({ addDiscussPost }) => {

    const { register, handleSubmit } = useForm();

    const handlePostSubmit = (data) => {

        console.log(data);
        addDiscussPost(data);
        // addDiscussPost();
    }


    return (
        <div className="bg-gray-50  px-10 py-4 ">

            <div className="w-10/12 bg-white p-6 px-10 border-2 rounded">
                <h1 className="text-2xl font-semibold my-4">Start a discussion</h1>
                <form onSubmit={handleSubmit(handlePostSubmit)}
                    className="flex flex-col  justify-center"
                >
                    <input
                        type="text"
                        placeholder="Ask a question or share something"
                        className="px-6 rounded bg-gray-50 p-2 text-xl border-2 focus:outline-none m-2"
                        {...register("postTitle")}

                    />
                    <textarea
                        placeholder="// Start typing..."
                        className="px-6 p-2 rounded bg-gray-50 text-xl h-60 border-2 focus:outline-none m-2"
                        {...register("postText")}

                    />

                    <button
                        type="submit"
                        className=" w-40 m-2 text-xl bg-purple-400 hover:bg-purple-500 text-white p-2 px-6 rounded-md">Post</button>
                </form>

            </div>

        </div>
    );
}
PostNewDiscussion.propTypes = {
  addDiscussPost: PropTypes.func.isRequired
};
export default connect(null,{addDiscussPost})(PostNewDiscussion);