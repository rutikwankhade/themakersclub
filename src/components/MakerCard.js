import React from 'react';
import profile from '../assets/icons/profile.svg'
const MakerCard = () => {
    return (
        <div>
            <div className="w-8/12 cursor-pointer hover:bg-purple-50 border p-6 rounded flex flex-row items-center">
                <span className="text-3xl  font-bold"> #1 </span>

                <div className="flex items-center ml-4 mr-auto">
                    <img src={profile} alt="profile" className="w-10 h-10 mx-2" />
                    <h2 className="text-xl mx-2">Rutik Wankhade</h2>
                </div>

                <span className="text-2xl px-2 "> 78 </span>
                <span className="text-xl">🚀 </span>
            </div>
        </div>
    );
}

export default MakerCard;