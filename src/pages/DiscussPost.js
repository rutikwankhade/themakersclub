import React, { useEffect } from 'react';
import profileImg from '../assets/icons/profile.svg'

import { connect } from 'react-redux';
import { getDiscussPost } from '../actions/discussPost';
import { Link } from 'react-router-dom'


const DiscussPost = ({ discussPost, loading, getDiscussPost, isAuthenticated, match }) => {

    useEffect(() => {
        getDiscussPost(match.params.id);
        console.log(discussPost)
    }, []);


    return (
        <div className="flex flex-col bg-gray-50 rounded">


            <div className='m-10 w-8/12'>

            <div className="p-10 border-2 border-t-8 rounded bg-white " >

                <h1 className="text-3xl font-semibold text-purple-400">{discussPost && discussPost.data[0].postTitle}</h1>
                <div className="flex my-4">
                    <img src={profileImg} alt="profile" className="h-8 w-8" />
                    <span className="text-xl text-gray-500 italic capitalize mx-2 ">{`Posted by ${discussPost && discussPost.data[0].userName}`}</span>

                </div>

                <p className="text-xl py-2">{discussPost && discussPost.data[0].postText}</p>
                <h2 className=" w-40 my-4 text-xl font-semibold italic border-2 p-2 rounded text-pink-400 text-center">{`${discussPost && discussPost.data[0].replies.length} Replies`}</h2>

            </div>

            {!isAuthenticated ?
                <div>
                    <Link to="/login" className="">
                        <button className="w-full mx-auto my-4 focus:outline-none rounded-full bg-purple-400 hover:bg-gray-600 p-4 text-white text-2xl ">
                            Login to join discussion
                        </button>
                    </Link>
                </div> :
                <div>
                    share you rthoughts
                </div>
            }


            </div>

        </div>
    );
}

const mapStateToProps = state => ({
    discussPost: state.discussPostReducer.discussPost,
    loading: state.loading,
    isAuthenticated: state.authReducer.isAuthenticated

})

export default connect(mapStateToProps, { getDiscussPost })(DiscussPost);