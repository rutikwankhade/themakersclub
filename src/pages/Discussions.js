import React from 'react';
import DiscussPostcard from '../components/DiscussPostCard';

const Discussions = () => {
    return (
        <div className="bg-gray-50">

            <div className="bg-gray-50 p-2 rounded flex flex-row">

                <div className="flex flex-col bg-gray-50 justify-center w-8/12 pb-20">

                    <DiscussPostcard />
                    <DiscussPostcard />
                    <DiscussPostcard />
                    <DiscussPostcard />

                </div>

                <div className="w-4/12 flex flex-col items-center ">
                    <button className="  px-6 sticky cursor-pointer top-20 m-4 bg-purple-400 text-white rounded-full text-center p-2 text-2xl font-semibold">
                        Start a discussion
                    </button>



                    <div className=" sticky top-36 m-4 bg-pink-100 p-4 rounded border-l-8 border-pink-200">
                        <h1 className="text-2xl font-semibold">Discussions</h1>
                        <p className="text-lg py-2">Start a discuusion thread on a topic and invite people to share their thoughts and ideas.</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Discussions;