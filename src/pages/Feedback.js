import React from 'react';
import feedbackImg from '../assets/images/review.png'
const Feedback = () => {
    return (
        <div>
            <div className="flex flex-row">
                <div className="">

                    <div className="flex pt-10 bg-pink-100 my-2 ">
                        <div className=" m-10">
                            <h1 className="text-4xl my-2 font-bold">Showcase and Feedback</h1>
                            <p className="text-xl ">Showcase what you built and get constructive feedback from the members of the makersclub.</p>
                        </div>
                        <img src={feedbackImg} alt="review" className=" ml-auto mr-2 w-1/3" />

                    </div>




                </div>

                


            </div>




            share project and give feedback page
        </div>
    );
}

export default Feedback;