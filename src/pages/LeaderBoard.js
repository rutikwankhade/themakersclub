import React, { useEffect } from 'react';
import MakerCard from '../components/MakerCard'
import leaderboardImg from '../assets/images/leaderboard.png'

import { connect } from 'react-redux';
import { getTopMakers } from '../actions/profile'
import {Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';


const LeaderBoard = ({ loading, getTopMakers, topMakers }) => {

    useEffect(() => {
        getTopMakers();
    }, [getTopMakers])



    return (
        <div>
            <div>
                <div className="flex md:flex-row flex-col bg-purple-100 my-2 ">
                    <div className=" m-10 md:w-1/2">
                        <h1 className="text-4xl my-2 font-bold">Leaderboard</h1>
                        <p className="text-xl ">Top makers from the makersclub who are building cool stuff and helping others in the community.</p>
                    </div>
                    <img src={leaderboardImg} alt="leaderboard" className=" md:w-80  mt-auto mb-0 ml-auto mr-2 " />
                </div>
            </div>

            <div className="">
                {
                    topMakers.map((maker, index) => {
                        
                        return <Link to={`/makers/${maker._id}`}>
                            {loading ? <Skeleton height={200} /> : <MakerCard maker={maker} rank={ index+1}/>}
                            </Link>
                    })
                }
               
            </div>

        </div>
    );
}

const mapStateToProps = state => ({
    topMakers: state.profileReducer.topMakers,
    loading: state.profileReducer.loading

})


export default connect(mapStateToProps, { getTopMakers })(LeaderBoard);