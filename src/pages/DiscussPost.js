import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { connect } from 'react-redux';
import { getDiscussPost, addDiscussComment } from '../actions/discussPost';
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import { useForm } from 'react-hook-form';


// import { formatRelative } from 'date-fns'


const DiscussPost = ({ authLoading, discussPost, loading, getDiscussPost, addDiscussComment, isAuthenticated, match }) => {

    const { register, handleSubmit } = useForm();


    useEffect(() => {
        getDiscussPost(match.params.id);
        console.log(match.params.id)
    }, [getDiscussPost, match]);


    const replyPost = (data) => {
        const { replyText } = data;

        addDiscussComment(discussPost._id, { replyText })
        setTimeout(() => {
            window.location.reload()
        }, 2000)

    }


    return (
        <div className="flex flex-col bg-gray-50  ">

            <div className='md:m-10 m-2 md:w-8/12 md:mx-20'>

                <div className="md:p-12 p-6 border rounded bg-white " >
                    {loading ? <Skeleton height={30} count={5} /> : <div>

                        <h1 className="text-3xl capitalize font-bold text-gray-700">
                            {discussPost && discussPost.title}
                        </h1>

                        <ReactMarkdown className="prose text-xl py-2">
                            {discussPost && discussPost.text}
                        </ReactMarkdown>


                        <div className="flex items-center">
                            <div className="flex my-4">
                                <img src={discussPost.avatar} alt="profile" className="h-8 w-8 rounded-full" />
                                <span className="text-xl text-gray-500 italic capitalize mx-2 ">
                                    {`Posted by ${discussPost && discussPost.name}`}
                                </span>
                            </div>
                            <span className="text-gray-400 ml-auto mr-4">{discussPost.date}</span>
                        </div>




                        <h2 className=" w-40 my-4 text-xl font-semibold italic border-2 p-2 rounded text-pink-400 text-center">
                            {`${discussPost && discussPost.replies.length} Replies`}
                        </h2>

                    </div>
                    }
                </div>


                {authLoading ? <Skeleton height={100} className="my-4" /> :
                    <div>
                        {!isAuthenticated ?
                            <div>
                                <Link to="/login">
                                    <button className="w-full mx-auto my-4 focus:outline-none rounded-full bg-purple-400 hover:bg-gray-600 p-4 text-white text-2xl ">
                                        Login to join discussion
                                    </button>
                                </Link>
                            </div> :
                            <div>
                                <div className="border md:p-10 bg-white my-4 rounded md:mb-2 mb-20">
                                    <form onSubmit={handleSubmit(replyPost)}>
                                        <textarea
                                            required
                                            {...register("replyText")}
                                            placeholder="Say something nice..!"
                                            className="w-full bg-gray-50 p-4 border-2 border-purple-300 text-xl focus:outline-none rounded my-2"
                                        />
                                        <button
                                            tyoe="submit"
                                            className="flex bg-gray-600 hover:bg-gray-700 rounded text-white px-6 py-2 text-xl ">
                                            Submit
                                        </button>
                                    </form>
                                </div>

                            </div>
                        }
                    </div>

                }



                <div>
                    {discussPost && discussPost.replies.map(reply => {
                        return <div className="bg-white border my-2 p-4 rounded">
                            <div className="flex flex-row items-center my-2">
                                <img src={reply.avatar} alt="profile" className="h-8 w-8 rounded-full" />
                                <span className="text-md font-semibold text-gray-500  capitalize mx-2 ">{reply.name}</span>

                            </div>
                            <ReactMarkdown className="prose text-xl mx-6">{reply.text}</ReactMarkdown>
                        </div>
                    })}

                </div>

            </div>

        </div>
    );
}

const mapStateToProps = state => ({
    discussPost: state.discussPostReducer.discussPost,
    loading: state.discussPostReducer.loading,
    isAuthenticated: state.authReducer.isAuthenticated,
    authLoading: state.authReducer.loading


})

export default connect(mapStateToProps, { getDiscussPost, addDiscussComment })(DiscussPost);