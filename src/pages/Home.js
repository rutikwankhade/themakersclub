import React from 'react';
import Header from '../components/Header'

import heroImg from '../assets/images/hero.png'


import feedbackImg from '../assets/images/review.png'
import discussionsImg from '../assets/images/discussions.png'
import resourcesImg from '../assets/images/resources.png'
import twitterIcon from '../assets/icons/twitter.svg'


const Home = () => {
    return (
        <div>

            {/* <Header /> */}


            <div className="bg-purple-400 rounded-md p-20">
<h1 className="text-5xl font-bold text-white p-4">A club of ideas, feedbacks and resources</h1>

                <div className="flex items-center">


                    <div className="flex flex-row flex-wrap justify-center  m-4 w-4/12">
                <div className="h-28 rounded m-2 p-6 bg-yellow-100 text-5xl opacity-80 shadow-2xl">👨‍💻</div>
                <div className="h-28 rounded m-2 p-6 bg-green-100 text-5xl opacity-80 shadow-2xl">🛠</div>
                <div className="h-28 rounded m-2 p-6 bg-pink-100 text-5xl opacity-80 shadow-2xl">‍💬</div>
                <div className="h-28 rounded m-2 p-6 bg-purple-100 text-5xl opacity-80 shadow-2xl">🚀</div>

            </div>
                                    <img src={heroImg} className="w-8/12"/>


                </div>
            </div>
            

            <div className="mt-20 ">
                <h1 className="text-4xl text-center mb-10 font-semibold">How it works?</h1>

                <div className="flex flex-col justify-center mb-40 md:mb-4">

                    <div className="flex flex-col md:flex-row px-10 pt-24  my-2">
                        <img src={feedbackImg} alt="review" className="md:w-1/2" />
                        <div className="md:m-12 my-4">
                            <h1 className="text-4xl my-2 font-bold">Showcase and ask for feedback</h1>
                            <p className="text-xl ">Showcase what you built and get constructive feedback from the members of the makersclub.</p>
                        </div>
                    </div>


                    <div className="flex flex-col-reverse md:flex-row px-10 pt-24 my-2">
                        <div className="md:m-12 my-4">
                            <h1 className="text-4xl my-2 font-bold">Discuss ideas</h1>
                            <p className="text-xl">Start a discuusion thread on a topic and invite people to share their thoughts and ideas.</p>
                        </div>
                        <img src={discussionsImg} alt="discuss" className="md:w-1/2" />

                    </div>



                    <div className="flex flex-col md:flex-row px-10 pt-24  my-2">
                        <img src={resourcesImg} alt="resources" className="md:w-1/2" />
                        <div className="md:m-12 my-4">
                            <h1 className="text-4xl my-2 font-bold">Share resources</h1>
                            <p className="text-xl ">Share helpful resources. And find them curated at one place for everyone.</p>
                        </div>
                    </div>


                    <div className="border p-10 rounded md:m-10 m-4 flex">

                        <div className=" md:text-left flex md:flex-row flex-col">
                            <img src="https://rutikwankhade.dev/rutikwankhade.webp" alt="rutik wankhade"
                                className="rounded-full h-24 w-24 m-4 opacity-80 md:ml-auto mr-2 " />

                            <div className="m-4 md:w-2/3">
                                <h1 className="text-2xl font-semibold">Meet the Maker</h1>
                                <p className="text-xl py-2">👋 Hi I am Rutik. I am a Frontend Developer, an avid learner and passionate about building things with code.</p>

                                <div className="flex w-32 ml-0 rounded bg-blue-400 hover:bg-blue-500 text-xl text-white px-2 py-1 mx-auto">
                                    <img src={twitterIcon} alt="twitter" className="h-8 w-8  text-white mx-2" />

                                    <a className="twitter-follow-button "
                                        href="https://twitter.com/WankhadeRutik"
                                        target="_blank"
                                        rel="noreferrer"
                                        data-size="large">
                                        Follow </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;