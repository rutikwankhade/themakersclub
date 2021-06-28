import React from 'react';
import ideaImg from '../assets/images/idea.png'
const Header = () => {
    return (
        <div className="p-0 pt-12 md:pt-1 bg-purple-400 w-full md:h-80 rounded-xl text-center flex md:flex-row flex-col justify-center items-center">
            <div className="text-white font-mono  ml-16 text-left">
                <h1 className="text-3xl font-semibold">A club of Ideas, feedbacks and resources.</h1>

            </div>

            <img src={ideaImg} alt="cover" className=" md:h-80 mr-2 ml-auto" />

        </div>
    );
}

export default Header;