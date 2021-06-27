import React, { useState } from 'react';

import { connect } from 'react-redux';
import { postResource } from '../actions/resources'


import resourcesImg from '../assets/images/resources.png'

import { LinkPreview } from '@dhaiwat10/react-link-preview';


const Resources = ({resources, postResource}) => {


    const [resourceCategory, setResourceCategory] = useState('');
    const [resourceUrl, setResourceUrl] = useState('')



    // useEffect(() => {
    //     console.log(resourceCategory, resourceUrl)
    // }, [resourceCategory, resourceUrl])

    const handleSubmit = () => {
        postResource({resourceCategory, resourceUrl})
    
}

    return (
        <div className="bg-gray-50">


            <div className="flex flex-row">


                <div className="w-8/12">
                    <div className="flex px-2 my-2 bg-purple-100">
                        <div className="m-10">
                            <h1 className="text-4xl my-2 font-bold">Resources</h1>
                            <p className="text-xl ">A collection of resources shared by members of the makers club.</p>
                        </div>
                        <img src={resourcesImg} alt="resources" className="w-80 h-40 ml-auto mt-auto mb-0" />

                    </div>




                    <div className="flex flex-row flex-wrap  justify-center">
                        <LinkPreview url='https://tabwave.vercel.app/' width="30%" descriptionLength="40" className=" m-2 text-sm" height="220px" />
                        <LinkPreview url='https://dev.to' descriptionLength="40" width="30%" className="m-2 text-sm" height="220px" />
                        <LinkPreview url='https://designvalley.club' descriptionLength="40" width="30%" className="m-2 text-sm" height="220px" />
                        <LinkPreview url='https://tabwave.vercel.app/' width="30%" descriptionLength="40" className=" m-2 text-sm" height="220px" />
                        <LinkPreview url='https://tabwave.vercel.app/' width="30%" descriptionLength="40" className=" m-2 text-sm" height="220px" />
                        <LinkPreview url='https://tabwave.vercel.app/' width="30%" descriptionLength="40" className=" m-2 text-sm" height="220px" />
                        <LinkPreview url='https://tabwave.vercel.app/' width="30%" descriptionLength="40" className=" m-2 text-sm" height="220px" />
                        <LinkPreview url='https://tabwave.vercel.app/' width="30%" descriptionLength="40" className=" m-2 text-sm" height="200px" />
                        <LinkPreview url='https://html-css-js.com/html/character-codes/' width="30%" descriptionLength="40" className=" m-2 text-sm" height="200px" />
                        <LinkPreview url='https://tabwave.vercel.app/' width="30%" descriptionLength="40" className=" m-2 text-sm" height="200px" />

                    </div>

                </div>

                <div className=" w-4/12 ">

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
                            onClick={()=>handleSubmit()}
                            className=" flex mx-auto text-xl bg-gray-700 text-white p-2 px-4 my-2 rounded">Submit</button>
                    </div>

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
    resources:state.resources
})

export default connect(mapStateToProps,{postResource})( Resources);