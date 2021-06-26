import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getDiscussPosts } from '../actions/discussPost'
import DiscussPostcard from '../components/DiscussPostCard';
import discussionsImg from '../assets/images/discussions.png'

const Discussions = ({ getDiscussPosts, discussPosts }) => {

    useEffect(() => {
        getDiscussPosts()

    }, [getDiscussPosts])

    return (
        <div className="bg-gray-50">
             <div className="flex px-20 pt-10 bg-purple-100 my-2">
                        <div className="w-1/2">
                            <h1 className="text-4xl my-2 font-bold">Discuss ideas</h1>
                            <p className="text-xl  ">Start a discuusion thread on any topic and invite people to share their thoughts and ideas.</p>
                        <Link to="/post-discussion" className="sticky top-20">
                        <button className="px-6 my-4 cursor-pointer bg-purple-400 hover:bg-purple-500 focus:outline-none text-white rounded-full text-center p-2 text-2xl font-semibold">
                            Start a discussion
                        </button>

                    </Link>
                
                </div>
                        <img src={discussionsImg} alt="discuss" className="ml-auto mr-2 w-1/3" />

                    </div>

            <div className="bg-gray-50 p-2 rounded flex flex-row">

                <div className="flex flex-col bg-gray-50 justify-center w-8/12 pb-20">
                    
                    
                   
                    
                    
                    {discussPosts.data && discussPosts.data.map(post => {
                        return <Link to={`/discussions/${post.id}`}><DiscussPostcard post={post} /></Link>


                    })}
                </div>

                <div className="w-4/12 flex flex-col items-center">
                    

                    <div className=" sticky top-40 m-4 bg-pink-100 p-4 rounded border-t-8 border-pink-200">

                        <h1 className="text-2xl font-semibold">Discussions</h1>
                        <p className="text-lg py-2">Start a discuusion thread on a topic and invite people to share their thoughts and ideas.</p>

                    </div>
                </div>

            </div>

        </div>
    );
}


const mapStateToProps = state => ({
    discussPosts: state.discussPostReducer.discussPosts
})

export default connect(mapStateToProps, { getDiscussPosts })(Discussions);