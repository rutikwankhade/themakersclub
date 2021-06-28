import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getDiscussPosts } from '../actions/discussPost'
import DiscussPostcard from '../components/DiscussPostCard';
import discussionsImg from '../assets/images/discussions.png'

const Discussions = ({ getDiscussPosts, discussPosts, isAuthenticated }) => {

    useEffect(() => {
        getDiscussPosts()

    }, [getDiscussPosts])

    return (
        <div className="bg-gray-50">

            <div className="flex md:flex-row flex-col-reverse md:px-20 p-6 pt-10 bg-purple-100 my-2">
                <div className="md:w-1/2">
                    <h1 className="text-4xl my-2 font-bold">Discuss ideas</h1>
                    <p className="text-xl">
                        Start a discuusion thread on any topic and invite people to share their thoughts and ideas.
                    </p>
                    <Link to="/post-discussion" className="sticky top-20">
                        <button className="px-6 my-4 cursor-pointer bg-purple-400 hover:bg-purple-500 focus:outline-none text-white rounded-full text-center p-2 text-2xl font-semibold">
                            {isAuthenticated?'Start a discussion':'Login to start a discussion'}
                        </button>

                    </Link>

                </div>
                <img src={discussionsImg} alt="discuss"
                    className="ml-auto mr-2 md:w-1/3"
                />

            </div>

            <div className="bg-gray-50 p-2 rounded flex md:flex-row flex-col">

                <div className="flex flex-col bg-gray-50 justify-center md:w-8/12 md:pb-20">

                    {
                        discussPosts.data && discussPosts.data.map(post => {
                            return <Link to={`/discussions/${post.id}`}>
                                <DiscussPostcard post={post} />
                            </Link>

                        })}
                </div>

                <div className="md:w-4/12 flex flex-col items-center">


                    <div className=" md:sticky md:top-40 mb-20 md:mb-2 m-4 bg-pink-100 p-4 rounded border-t-8 border-pink-200">

                        <h1 className="text-2xl font-semibold">Rules</h1>
                        <p className="text-lg py-2">Be kind and respectful to everyone.</p>
                        <p className="text-lg py-2">Respect that other people in the community have different life experiences and may have a different perspective than yours</p>
                        <p className="text-lg py-2">Please do not spam.</p>

                    </div>
                </div>

            </div>

        </div>
    );
}


const mapStateToProps = state => ({
    discussPosts: state.discussPostReducer.discussPosts,
    isAuthenticated:state.authReducer.isAuthenticated
})

export default connect(mapStateToProps, { getDiscussPosts })(Discussions);