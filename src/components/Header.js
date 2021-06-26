import React from 'react';
import ideaImg from '../assets/images/idea.png'
const Header = () => {
    return (
        <div className="p-0 bg-purple-400 w-full h-80 rounded-xl text-center flex flex-row justify-center items-center">
            <div className="text-white font-mono  ml-16 text-left">
                <h1 className="text-3xl font-semibold">A club of Ideas, feedbacks and resources.</h1>

            </div>

            <img src={ideaImg} alt="cover" className=" h-80 mr-2 ml-auto" />

        </div>
    );
}

export default Header;