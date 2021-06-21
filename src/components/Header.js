import React from 'react';
import ideaImg from '../assets/images/idea.png'
const Header = () => {
    return (
        <div className="bg-purple-300 w-full h-80 rounded-xl text-center flex flex-row justify-center items-center">
            <div className="text-white font-mono  ml-16 text-left">
                            <h1 className="text-3xl font-semibold">A club of Ideas, feedbacks and resources.</h1>

            </div>

            <img src={ideaImg} alt="cover" className="mr-2 ml-auto"/>

        </div>
     );
}
 
export default Header;