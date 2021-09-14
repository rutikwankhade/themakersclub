import React from 'react';
import MakerCard from '../components/MakerCard'
const LeaderBoard = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold bg-purple-400 text-white p-6 rounded">Top makers in the club</h1>
            </div>

            <div className="p-10">
                <MakerCard />
                <MakerCard />
                <MakerCard />
                <MakerCard />
                <MakerCard />
                <MakerCard />
                <MakerCard />
                <MakerCard />
                <MakerCard />
            </div>

        </div>
    );
}

export default LeaderBoard;