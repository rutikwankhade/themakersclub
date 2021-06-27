import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux'
import { addShowcasePost, getAllShowcasePosts } from '../actions/showcasePost'
import feedbackImg from '../assets/images/review.png'


const Feedback = ({ addShowcasePost,getAllShowcasePosts }) => {

    const [showcaseUrl, setShowcaseUrl] = useState('');
    const [showcaseText, setShowcaseText] = useState('');

    useEffect(() => {
        getAllShowcasePosts();
    }, [])

    const handleSubmit = () => {

        console.log(showcaseUrl, showcaseText)
        addShowcasePost(showcaseUrl, showcaseText);

    }


    return (
        <div className="bg-gray-50">
            <div className="flex flex-row">
                <div className="w-8/12">

                    <div className="flex bg-purple-100 my-2 ">
                        <div className=" m-10">
                            <h1 className="text-4xl my-2 font-bold">Showcase and Feedback</h1>
                            <p className="text-xl ">Showcase what you built and get constructive feedback from the members of the makersclub.</p>
                        </div>
                        <img src={feedbackImg} alt="review" className=" w-80 h-40 mt-auto mb-0 ml-auto mr-2 " />
                    </div>

                    <div>
                        <div className="bg-white border-2 w-full p-10 "></div>
                        <div className="bg-white border-2 w-full p-10 "></div>
                        <div className="bg-white border-2 w-full p-10 "></div>
                        <div className="bg-white border-2 w-full p-10 "></div>
                        <div className="bg-white border-2 w-full p-10 "></div>


                    </div>

                </div>


                <div className="sticky top-24 h-1/2 w-4/12 bg-white border m-4 p-4">

                    <h1 className="text-xl m-2">Hey everyone, I built</h1>
                    <input
                        onChange={(e) => setShowcaseUrl(e.target.value)}
                        placeholder="https://makerclub.vercel.app"
                        className="text-xl bg-gray-50 border-2 w-full p-2 rounded" />

                    <textarea
                        onChange={(e) => setShowcaseText(e.target.value)}
                        placeholder="What's your project is about?"
                        className="my-2 h-60 text-xl bg-gray-50 border-2 w-full p-2 rounded" />
                    <button
                        onClick={() => handleSubmit()}
                        className=" flex mx-auto text-xl bg-gray-700 text-white p-2 px-4 my-2 rounded">Showcase</button>

                </div>

            </div>

        </div>
    );
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { addShowcasePost, getAllShowcasePosts })(Feedback);