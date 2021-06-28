import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { postResource, getAllResources } from '../actions/resources'
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import resourcesImg from '../assets/images/resources.png'
import { Link } from 'react-router-dom'
import UrlPreview from '../components/UrlPreview'


const Resources = ({ resources, isAuthenticated, postResource, getAllResources }) => {


    const [resourceCategory, setResourceCategory] = useState('');
    const [resourceUrl, setResourceUrl] = useState('')



    useEffect(() => {
        getAllResources();
    }, [getAllResources])

    const handleSubmit = () => {
        postResource({ resourceCategory, resourceUrl })

    }

    return (
        <div className="bg-gray-50">

            <div className="flex flex-row">

                <div className="w-8/12">
                    <div className="flex px-2 my-2 bg-purple-100">
                        <div className="m-10">
                            <h1 className="text-4xl my-2 font-bold">
                                Resources
                            </h1>
                            <p className="text-xl ">
                                A collection of resources shared by members of the makers club.
                            </p>
                        </div>
                        
                        <img src={resourcesImg} alt="resources"
                            className="w-80 h-40 ml-auto mt-auto mb-0"
                        />

                    </div>


                    <div className="flex flex-row flex-wrap  justify-center">
                        {resources.data && resources.data.map(res => {
                            return (
                            <LinkPreview url={res.url}
                                width="30%"
                                descriptionLength="40"
                                    className=" m-2 text-sm" height="220px"
                                    fallback={<UrlPreview url={res.url}/>}
                                />
                            )
                        })}

                    </div>
                </div>

               
                <div className=" w-4/12 ">

                    {!isAuthenticated ?
                        <div className="sticky top-20 h-60 border-8 border-white p-8 rounded-lg m-4 bg-purple-400 text-white">

                            <h1 className="text-2xl font-semibold">
                                Join the makersclub community and share resources.
                            </h1>
                            <Link to="/signup">
                                <button className="text-xl bg-gray-600 hover:bg-gray-700 p-2 px-6 rounded-full my-4">
                                ✨ Join now
                            </button>
                            </Link>
                        </div>
                        :
                        <div className="sticky top-20 h-60 bg-white border-2 p-6 m-4  ">

                            <input
                                onChange={(e) => setResourceUrl(e.target.value)}
                                placeholder="Share a resource url"
                                className="text-xl bg-gray-50 border-2 w-full p-2 rounded" />


                            <div class=" inline-block relative w-full border my-2 px-4 py-2 rounded shadow">
                                <select
                                    onChange={(e) => setResourceCategory(e.target.value)}
                                    className="block w-full bg-white text-purple-500 font-semibold focus:outline-none"
                                >
                                    <option>UI/UX</option>
                                    <option>CSS</option>
                                    <option>Tools</option>
                                    <option>Design</option>
                                    <option>Web dev</option>
                                    <option>Marketing</option>
                                    <option>Writing</option>
                                    <option>Hackathons</option>
                                    <option>Others</option>

                                </select>

                            </div>
                            <button
                                onClick={() => handleSubmit()}
                                className=" flex mx-auto text-xl bg-gray-700 text-white p-2 px-4 my-2 rounded">
                                Submit
                            </button>
                        </div>

                    }


                    <div className="bg-white border p-6 m-4 sticky top-40">
                        <h1 className="text-xl font-semibold">Categories</h1>
                        <div className="flex flex-row flex-wrap py-4">
                            <span className="cursor-pointer font-semibold bg-pink-100 rounded-full px-4 py-2 m-1">All</span>
                            <span className="cursor-pointer font-semibold bg-pink-100 rounded-full px-4 py-2 m-1">UI/UX</span>
                            <span className="cursor-pointer font-semibold bg-pink-100 rounded-full px-4 py-2 m-1">Design</span>
                            <span className=" cursor-pointer font-semibold bg-pink-100 rounded-full px-4 py-2 m-1">CSS</span>
                            <span className="cursor-pointer font-semibold bg-pink-100 rounded-full px-4 py-2 m-1">Tools</span>
                            <span className="cursor-pointer font-semibold bg-pink-100 rounded-full px-4 py-2 m-1">Web dev</span>
                            <span className="cursor-pointer font-semibold bg-pink-100 rounded-full px-4 py-2 m-1">Marketing</span>
                            <span className="cursor-pointer font-semibold bg-pink-100 rounded-full px-4 py-2 m-1">Writing</span>
                            <span className="cursor-pointer font-semibold bg-pink-100 rounded-full px-4 py-2 m-1">Hackathons</span>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    resources: state.resourcesReducer.resources,
    isAuthenticated: state.authReducer.isAuthenticated
})

export default connect(mapStateToProps, { postResource, getAllResources })(Resources);