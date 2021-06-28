import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { getShowcasePost, addFeedback } from '../actions/showcasePost'
import profileImg from '../assets/icons/profile.svg'
import linkIcon from '../assets/icons/link.svg'


const ShowcasePost = ({ getShowcasePost, showcasePost, addFeedback, match }) => {


    const [feedbackType, setFeedbackType] = useState('')
    const [feedbackText, setFeedbackText] = useState('')



    useEffect(() => {
        getShowcasePost(match.params.id);

    }, [getShowcasePost, match])


    const postFeedback = () => {
        console.log(feedbackType, feedbackText);
        addFeedback(match.params.id, { feedbackType, feedbackText })

        setTimeout(() => {
            window.location.reload()
        }, 2000)
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
                    <div className="flex">
                        <h1 className="md:text-3xl text-2xl capitalize py-2 font-semibold">{showcasePost && showcasePost.data[0].showcaseTitle}</h1>

                        <a href={showcasePost && showcasePost.data[0].showcaseUrl} target="_blank" rel="noreferrer" className="ml-auto mr-4 ">
                            <img src={linkIcon} alt="profile" className=" cursor-pointer h-10 w-10  bg-pink-100  hover:bg-purple-100 rounded-full p-2" />
                        </a>
                    </div>
                    <p className="text-xl py-2">{showcasePost && showcasePost.data[0].showcaseText}</p>
                    <span className="text-gray-400 py-2">{Date(showcasePost && showcasePost.data[0].__createdtime__).toLocaleString()}</span>

                </div>



                <div className="border bg-white rounded p-10 my-4">
                    <h1 className="text-xl font-semibold">Give Feedback</h1>
                    <div class=" inline-block relative w-full border my-2 px-4 py-2 rounded shadow">
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
                        onChange={(e) => setFeedbackText(e.target.value)}
                        placeholder="Share your feedback"
                        className="w-full bg-gray-50 p-4 border-2 border-purple-300 text-xl focus:outline-none rounded my-2"
                    />

                    <button
                        onClick={() => postFeedback()}
                        className="bg-gray-600 hover:bg-gray-700 rounded text-white px-6 py-2 text-xl ">Submit</button>
                </div>

                {showcasePost && showcasePost.data[0].feedbacks.map(feedback => {
                    return <div className="border bg-white p-10 my-4 ">
                        <div className="flex md:flex-row flex-col-reverse md:items-center">
                            <div className="flex flex-row md:mt-2 mt-6 md:my-0">
                                <img src={profileImg} alt="profile" className="w-8 h-8 mx-2" />
                                <span className="text-lg">{feedback.userName}</span>
                            </div>
                            <span className={` rounded-full text-center md:ml-auto mr-2 font-semibold  text-lg px-4 py-1 ${tagColor(feedback.feedbackType)}`}>{feedback.feedbackType}</span>

                        </div>
                        <p className="m-4 text-xl">{feedback.feedbackText}</p>

                    </div>
                })


                }

            </div>

            <div className=" sticky top-24 border bg-white mx-4  md:w-4/12 h-60">
                <h1 className="text-xl text-right bg-purple-50 font-semibold px-4 p-2">Maker</h1>
                <div className="flex flex-col justify-center items-center">
                    <img src={profileImg} alt="profile" className="w-24 h-24 mt-6" />
                    <h3 className="my-2 text-xl ">{showcasePost && showcasePost.data[0].userName}</h3>
                </div>

            </div>
        </div>
    );
}
const mapStateToProps = state => ({
    showcasePost: state.showcasePostsReducer.showcasePost

})

export default connect(mapStateToProps, { getShowcasePost, addFeedback })(ShowcasePost);