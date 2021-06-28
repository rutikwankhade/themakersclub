import React, { useEffect, useState } from 'react';
import profileImg from '../assets/icons/profile.svg'
import ReactMarkdown from 'react-markdown';

import { connect } from 'react-redux';
import { getDiscussPost, addDiscussComment } from '../actions/discussPost';
import { Link } from 'react-router-dom'


const DiscussPost = ({ discussPost, loading, getDiscussPost, addDiscussComment, isAuthenticated, match }) => {

    const [commentText, setCommentText] = useState('')



    useEffect(() => {
        getDiscussPost(match.params.id);
    }, [getDiscussPost, match]);


    const replyPost = () => {
        addDiscussComment(discussPost.data[0].id, { commentText })
        setTimeout(() => {
            window.location.reload()
        }, 2000)
    }

    return (
        <div className="flex flex-col bg-gray-50 ">

            <div className='md:m-10 m-2 md:w-8/12 md:mx-20'>

                <div className="md:p-12 p-6 border rounded bg-white " >

                    <h1 className="text-3xl capitalize font-semibold text-purple-400">
                        {discussPost && discussPost.data[0].postTitle}
                    </h1>

                    <div className="flex my-4">
                        <img src={profileImg} alt="profile" className="h-8 w-8" />
                        <span className="text-xl text-gray-500 italic capitalize mx-2 ">
                            {`Posted by ${discussPost && discussPost.data[0].userName}`}
                        </span>
                    </div>
                    <span className="text-gray-400">{Date(discussPost && discussPost.data[0].__createdtime__).toLocaleString()}</span>


                    <ReactMarkdown className="prose text-xl py-2">
                        {discussPost && discussPost.data[0].postText}
                    </ReactMarkdown>
                    <h2 className=" w-40 my-4 text-xl font-semibold italic border-2 p-2 rounded text-pink-400 text-center">
                        {`${discussPost && discussPost.data[0].replies.length} Replies`}
                    </h2>

                </div>

                {!isAuthenticated ?
                    <div>
                        <Link to="/login">
                            <button className="w-full mx-auto my-4 focus:outline-none rounded-full bg-purple-400 hover:bg-gray-600 p-4 text-white text-2xl ">
                                Login to join discussion
                            </button>
                        </Link>
                    </div> :
                    <div>
                        <div className="border-2 p-6 bg-white my-4 rounded md:mb-2 mb-20">
                            <textarea
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Say something nice..!"
                                className="w-full bg-gray-50 p-4 border-2 border-purple-300 text-xl focus:outline-none rounded my-2"
                            />
                            <button
                                onClick={() => replyPost()}
                                className="bg-gray-600 hover:bg-gray-700 rounded text-white px-6 py-2 text-xl ">Submit</button>
                        </div>

                    </div>
                }

                <div>
                    {discussPost && discussPost.data[0].replies.map(reply => {
                        return <div className="bg-white border m-2 p-4 rounded">
                            <div className="flex my-2">
                                <img src={profileImg} alt="profile" className="h-8 w-8" />
                                <span className="text-xl text-gray-500 italic capitalize mx-2 ">{reply.userName}</span>

                            </div>
                            <ReactMarkdown className="prose text-xl mx-6">{reply.commentText}</ReactMarkdown>
                        </div>
                    })}

                </div>

            </div>

        </div>
    );
}

const mapStateToProps = state => ({
    discussPost: state.discussPostReducer.discussPost,
    loading: state.loading,
    isAuthenticated: state.authReducer.isAuthenticated

})

export default connect(mapStateToProps, { getDiscussPost, addDiscussComment })(DiscussPost);