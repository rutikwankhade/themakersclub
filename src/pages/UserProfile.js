import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { getMakerProfile } from '../actions/profile'

import Skeleton from 'react-loading-skeleton';
import editIcon from '../assets/icons/edit.svg'


import twitterIcon from '../assets/icons/twitterIcon.svg'
import githubIcon from '../assets/icons/githubIcon.svg'
import linkedinIcon from '../assets/icons/twitterIcon.svg'
import linkIcon from '../assets/icons/link.svg'






const UserProfile = ({ getMakerProfile, makerProfile, match, loading, currentUser }) => {

    useEffect(() => {
        getMakerProfile(match.params.id);
        // console.log(makerProfile)
        // console.log(match.params.id)

    })

    return (
        <div>

            {
                loading ?
                    <Skeleton height={50} count={3} />
                    :
                    <div>
                        <div className="bg-purple-100 w-full h-24 p-4"></div>
                        <div className=" border  rounded flex ">
                            <div className="w-1/2 text-center">
                                <img src={makerProfile && makerProfile.user.avatar}

                                    alt="profile"
                                    className="border-4 border-white w-32 h-32 rounded-full mx-auto transform -translate-y-12"
                                />
                                <div className="transform -translate-y-12 p-4">
                                    <h1 className="text-2xl font-semibold">{makerProfile && makerProfile.user.name}</h1>
                                    <p className="text-lg">{makerProfile && makerProfile.bio}</p>
                                </div>


                                <div className="border shadow-sm w-max mx-auto rounded-full px-10 py-2 transform -translate-y-12 flex flex-row items-center justify-center">
                                    <img src={twitterIcon} alt="twitter" className="h-8 w-8  mx-2" />
                                    <img src={githubIcon} alt="twitter" className="h-8 w-8  mx-2" />
                                    <img src={linkedinIcon} alt="twitter" className="h-8 w-8  mx-2" />
                                    <img src={linkIcon} alt="twitter" className="h-8 w-8  mx-2" />

                                </div>

                            </div>


                            <div className="flex items-center  justify-center shadow-sm border bg-white w-1/3 rounded-xl mx-4 h-40 transform -translate-y-10">

                                <div className="w-40 h-20 m-2  p-2 rounded text-center">
                                    <h1 className="text-6xl font-bold">{makerProfile && makerProfile.points}</h1>
                                    <span className="text-purple-400 text-xl font-semibold">Maker Points</span>
                                </div>
                                <h1 className="text-6xl font-bold">🚀</h1>

                            </div>

                            {
                                currentUser._id === makerProfile.user._id ?
                                    <div>
                                        <Link to="/edit-profile">
                                            <button className="border flex items-center px-4 py-2 text-indigo-400 font-semibold hover:text-indigo-500 rounded-full bg-white transform -translate-y-5">
                                                <img src={editIcon} alt="edit" className="h-4 w-4 mr-2" />
                                                Edit Profile
                                            </button>
                                        </Link>
                                    </div>
                                    :
                                    <div></div>
                            }



                        </div>
                    </div>

            }








            {/* <div className="md:w-8/12 mx-auto">
                <div class="relative  mx-auto">

                <div class="border-r-4 border-purple-300  absolute h-full top-0" style={{ left: 20 }}></div>
             <div >
                
                        
                        <div class="flex flex-row items-center">
                    <div class="bg-purple-300 rounded-full h-10 w-10 ">💬</div>
                    <div class="flex flex-col  mx-4 p-2 hover:bg-gray-50 ">
                        <span className="w-1/2 text-pink-400 font-medium mr-2 border ">Started a discussion</span>
                        <h2 className="text-2xl font-medium text-gray-500">How to come up with side project ideas</h2>
                    </div>
                        </div>
                          
        </div>
                </div>
                 
            </div> */}
        </div>
    );
}

const mapStateToProps = state => ({
    currentUser: state.authReducer.user,
    makerProfile: state.profileReducer.makerProfile,
    loading: state.profileReducer.loading,
    isAuthenticated: state.authReducer.isAuthenticated,
})

export default connect(mapStateToProps, { getMakerProfile })(UserProfile);