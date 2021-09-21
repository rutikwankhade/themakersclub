import React from 'react';
const MakerCard = ({maker, rank}) => {
    return (
        <div>
            <div className="cursor-pointer hover:bg-purple-50 border p-6 rounded flex flex-row items-center">
                <span className="text-3xl  font-bold "> #{ rank}</span>

                <div className="flex items-center ml-6 mr-auto">
                    <img src={maker.user.avatar} alt="profile" className="rounded-full w-10 h-10 mx-2" />
                    <h2 className="text-xl mx-2 capitalize">{maker.user.name}</h2>
                </div>

                <span className="text-2xl px-2 text-purple-400 font-semibold">{maker.points}</span>
                <span className="text-xl">🚀</span>
            </div>
        </div>
    );
}

export default MakerCard;