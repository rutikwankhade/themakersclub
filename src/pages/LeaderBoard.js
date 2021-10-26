import React, { useEffect } from 'react';
import MakerCard from '../components/MakerCard'
import leaderboardImg from '../assets/images/leaderboard.png'

import { connect } from 'react-redux';
import { getTopMakers } from '../actions/profile'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';


const LeaderBoard = ({ loading, getTopMakers, topMakers }) => {

    useEffect(() => {
        getTopMakers();
    }, [getTopMakers])



    return (
        <div className="bg-gray-50">
            <div>
                <div className="flex md:flex-row flex-col bg-purple-100 my-2 ">
                    <div className=" m-10 md:w-1/2">
                        <h1 className="text-4xl my-2 font-bold">Leaderboard</h1>
                        <p className="text-xl ">Top makers from the makersclub who are building cool stuff and helping others in the community.</p>
                    </div>
                    <img src={leaderboardImg} alt="leaderboard" className=" md:w-80  mt-auto mb-0 ml-auto mr-2 " />
                </div>
            </div>


            <div className="flex md:flex-row flex-col">


                <div className="md:w-8/12 md:pb-20">
                    {
                        topMakers.map((maker, index) => {

                            return <Link to={`/profile/${maker._id}`}>
                                {loading ? <Skeleton height={200} /> : <MakerCard maker={maker} rank={index + 1} />}
                            </Link>
                        })
                    }

                </div>

                <div className=" md:sticky md:top-40 h-full rounded md:w-1/3 mx-4 border bg-green-50 p-4">
                    <h1 className="text-2xl font-bold">How this works?</h1>
                    <p className="text-md py-2">The leaderboard is based on the maker points system. For every activity, a maker is rewarded with following points.</p>


                    <div className="transition duration-300 transform hover:scale-105 flex w-full bg-white p-2 text-md font-semibold border ">
                        <span >Showcase your project</span>
                        <span className="ml-auto mr-2">10 🚀</span>
                    </div>

                    <div className="transition duration-300 transform hover:scale-105 flex w-full bg-white p-2 text-md font-semibold border ">
                        <span >Give feedback</span>
                        <span className="ml-auto mr-2">7 🚀</span>
                    </div>

                    <div className="transition duration-300 transform hover:scale-105 flex w-full bg-white p-2 text-md font-semibold border ">
                        <span >Start a discussion</span>
                        <span className="ml-auto mr-2">5 🚀</span>
                    </div>

                    <div className="transition duration-300 transform hover:scale-105 flex w-full bg-white p-2 text-md font-semibold border ">
                        <span >Engage in a discussion</span>
                        <span className="ml-auto mr-2">3 🚀</span>
                    </div>


                </div>

            </div>

        </div>
    );
}

const mapStateToProps = state => ({
    topMakers: state.profileReducer.topMakers,
    loading: state.profileReducer.loading

})


export default connect(mapStateToProps, { getTopMakers })(LeaderBoard);