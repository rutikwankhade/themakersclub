import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { getShowcasePost, addFeedback } from '../actions/showcasePost';
import { Link } from 'react-router-dom';
import profileImg from '../assets/icons/profile.svg'
import linkIcon from '../assets/icons/link.svg'
import Skeleton from 'react-loading-skeleton';
import { useForm } from 'react-hook-form';
import { updatePoints } from '../actions/profile'

// import { formatRelative } from 'date-fns'
// import placeholder from '../assets/images/placeholder.jpg'

const ShowcasePost = ({ loading, authLoading, isAuthenticated, getShowcasePost, showcasePost, addFeedback, match, updatePoints, points }) => {

    const { register, handleSubmit } = useForm();
    const [feedbackType, setFeedbackType] = useState('🐞 Bug fix')


    useEffect(() => {
        getShowcasePost(match.params.id);

    }, [getShowcasePost, match])


    const postFeedback = (data) => {
        const { feedbackText } = data;

        console.log(feedbackType, feedbackText);
        addFeedback(match.params.id, { feedbackType, feedbackText })

        updatePoints({
            points: points,
            boost: 7
        });

        setTimeout(() => {
            window.location.reload()
        }, 3000)


    }

    const tagColor = (feedbackType) => {

        switch (feedbackType) {
            case '👏 Appreciation':
                return 'bg-yellow-100';
            case '✨ UI improvement':
                return 'bg-green-100';
            case '🐞 Bug fix':
                return 'bg-red-100';
            case '💡 Feature suggestion':
                return 'bg-indigo-100'

            default: return 'bg-gray-50'
        }

    }



    return (
        <div className="bg-gray-50 flex md:flex-row flex-col md:p-12 p-4">
            <div className="md:w-8/12">

                <div className="border bg-white rounded p-10">
                    {loading ? <Skeleton count={4} height={30} /> :
                        <div>
                            <div className="flex">
                                <h1 className="md:text-3xl text-2xl capitalize py-2 font-semibold">{showcasePost && showcasePost.title}</h1>

                                <a href={showcasePost && showcasePost.url} target="_blank" rel="noreferrer" className="ml-auto mr-4 ">
                                    <img src={linkIcon} alt="profile" className=" cursor-pointer h-10 w-10  bg-pink-100  hover:bg-purple-100 rounded-full p-2" />
                                </a>
                            </div>
                            <p className="text-xl py-2">{showcasePost && showcasePost.desc}</p>
                            {/* <div className="p-2 my-2 border rounded shadow-sm">
                                <img src={`https://capture-website-api.herokuapp.com/capture?url=${showcasePost && showcasePost.url}` || placeholder} alt="screenshot" className=" my-2" />
                            </div> */}
                            <span className="text-gray-400 ">{showcasePost && new Date(showcasePost.date).toLocaleDateString("en-US",{  year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                    }
                </div>





                {authLoading ? <Skeleton height={200} className="my-4" /> :

                    <div>
                        {
                            !isAuthenticated ?
                                <div >
                                    <Link to="/login">
                                        <button className="w-full mx-auto my-4 focus:outline-none rounded-full bg-purple-400 hover:bg-gray-600 p-4 text-white text-2xl ">
                                            Login to submit feedback
                                        </button>
                                    </Link>

                                </div>
                                :
                                <div className="border bg-white rounded p-10 my-4">
                                    <h1 className="text-xl font-semibold">Give Feedback</h1>
                                    <form onSubmit={handleSubmit(postFeedback)}>
                                        <div className=" inline-block relative w-full border my-2 px-4 py-2 rounded shadow">
                                            <select

                                                onChange={(e) => setFeedbackType(e.target.value)}
                                                className="block w-full bg-white text-xl text-purple-500 font-semibold focus:outline-none"
                                            >

                                                <option>🐞 Bug fix</option>
                                                <option>✨ UI improvement</option>
                                                <option>💡 Feature suggestion</option>
                                                <option>👏 Appreciation</option>

                                            </select>

                                        </div>
                                        <textarea
                                            required
                                            {...register("feedbackText")}
                                            placeholder="Share your feedback"
                                            className="w-full bg-gray-50 p-4 border-2 border-purple-300 text-xl focus:outline-none rounded my-2"
                                        />

                                        <button
                                            type="submit"
                                            // onClick={() => postFeedback()}
                                            className="bg-gray-600 hover:bg-gray-700 rounded text-white px-6 py-2 text-xl ">Submit</button>
                                    </form>
                                </div>

                        }

                    </div>}



                {showcasePost && showcasePost.feedbacks.map(feedback => {
                    return <div className="border bg-white p-10 my-4 ">
                        <div className="flex md:flex-row flex-col-reverse md:items-center">
                            <div className="flex flex-row  items-center md:mt-2 mt-6 md:my-0">
                                <img src={feedback.avatar} alt="profile" className="w-6 h-6 rounded-full mx-2" />
                                <span className="text-md capitalize font-semibold text-gray-600">{feedback.name}</span>
                            </div>
                            <span className={` rounded-full text-center md:ml-auto mr-2 font-semibold  text-lg px-4 py-1 ${tagColor(feedback.feedbackType)}`}>{feedback.feedbackType}</span>

                        </div>
                        <p className="m-4 text-xl">{feedback.feedback}</p>

                    </div>
                })


                }

            </div>

            <div className=" sticky top-24  mx-4  md:w-4/12 h-60">

                <div className=" border rounded bg-white">
                    <h1 className="text-xl text-right bg-purple-50 font-semibold px-4 p-2">Maker</h1>
                    <div className="flex flex-col justify-center items-center">
                        <img src={profileImg} alt="profile" className="w-24 h-24 mt-6" />
                        <h3 className="my-2 text-xl  ">{showcasePost && showcasePost.name}</h3>
                    </div>
                </div>
                {loading ? <Skeleton height={50} className="my-2" />
                    : <div className="text-center font-semibold bg-white border p-2 my-2 text-xl">
                        {`${showcasePost && showcasePost.feedbacks.length} Feedbacks`}
                    </div>
                }


            </div>

        </div>
    );
}
const mapStateToProps = state => ({
    showcasePost: state.showcasePostsReducer.showcasePost,
    loading: state.showcasePostsReducer.loading,

    isAuthenticated: state.authReducer.isAuthenticated,
    authLoading: state.authReducer.loading,
    points: state.profileReducer.userProfile.points



})

export default connect(mapStateToProps, { getShowcasePost, addFeedback, updatePoints })(ShowcasePost);