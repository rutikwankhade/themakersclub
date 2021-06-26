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


            {/* <div className="flex flex-row">
            
                <div className="  m-10 bg-green-200 rounded-full w-40 h-40 text-7xl flex justify-center items-center">👨‍💻 </div>
                <div className=" m-10 bg-pink-200 rounded-full w-40 h-40 text-7xl flex justify-center items-center">👨‍💻 </div>
                <div className=" m-10 bg-indigo-200 rounded-full w-40 h-40 text-7xl flex justify-center items-center">👨‍💻 </div>

          
            </div> */}

            <div className="mt-20 ">
                <h1 className="text-4xl text-center mb-10 font-semibold">How it works?</h1>

                <div className="flex flex-col justify-center">
                   
                    <div className="flex px-10 pt-24  my-2">
                        <img src={feedbackImg} alt="review" className="w-1/2" />
                        <div className="m-12">
                            <h1 className="text-4xl my-2 font-bold">Showcase and ask for feedback</h1>
                            <p className="text-xl ">Showcase what you built and get constructive feedback from the members of the makersclub.</p>
                        </div>
                    </div>


                    <div className="flex px-10 pt-24  my-2">
                        <div className="m-12">
                            <h1 className="text-4xl my-2 font-bold">Discuss ideas</h1>
                            <p className="text-xl  ">Start a discuusion thread on a topic and invite people to share their thoughts and ideas.</p>
                        </div>
                        <img src={discussionsImg} alt="discuss" className="w-1/2" />

                    </div>



                    <div className="flex px-10 pt-24  my-2">
                        <img src={resourcesImg} alt="resources" className="w-1/2" />
                        <div className="m-12">
                            <h1 className="text-4xl my-2 font-bold">Share resources</h1>
                            <p className="text-xl ">Share helpful resources. And find them curated at one place for everyone.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;