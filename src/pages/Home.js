import React from 'react';
import Header from '../components/Header'

import feedbackImg from '../assets/images/review.png'
import discussionsImg from '../assets/images/discussions.png'
import resourcesImg from '../assets/images/resources.png'


const Home = () => {
    return (
        <div>

            <Header />
            <div className="bg-white border-2 border-gray-600 rounded w-10/12 p-10 transform -translate-y-10 mx-auto">
                <p className="text-2xl text-center font-semibold">👨‍💻 Build + 📝 Get Feedback +  🤹 Learn =  ✨ Magic     </p>
            </div>

            <div className="mt-20 px-10">
                <h1 className="text-3xl text-center mb-10 font-semibold">How it works?</h1>

                <div className="flex flex-col justify-center">
                    <div className="flex my-10">
                        <img src={feedbackImg} alt="review" className="w-1/2" />
                        <div className="m-12">
                            <h1 className="text-3xl my-2">Showcase and feedback</h1>
                            <p className="text-xl ">Showcase what you built and get constructive feedback from the members of the makersclub.</p>
                        </div>
                    </div>


                    <div className="flex my-10">
                        <div className="m-12">
                            <h1 className="text-3xl my-2">Discuss ideas</h1>
                            <p className="text-xl ">Start a discuusion thread on a topic and invite people to share their thoughts and ideas.</p>
                        </div>
                        <img src={discussionsImg} alt="discuss" className="w-1/2" />

                    </div>



                    <div className="flex my-10">
                        <img src={resourcesImg} alt="resources" className="w-1/2" />
                        <div className="m-12">
                            <h1 className="text-3xl my-2">Share resources</h1>
                            <p className="text-xl ">Share helpful resources. And find them curated at one place for everyone.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;