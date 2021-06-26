import React from 'react';
import resourcesImg from '../assets/images/resources.png'

import { LinkPreview } from '@dhaiwat10/react-link-preview';


const Resources = () => {
    return (
        <div className="bg-gray-50">


            <div className="flex flex-row">


                <div className="w-8/12">
                    <div className="flex px-2 my-2 bg-purple-100">
                        <div className="m-10">
                            <h1 className="text-4xl my-2 font-bold">Resources</h1>
                            <p className="text-xl ">A collection of resources shared by members of the makers club.</p>
                        </div>
                        <img src={resourcesImg} alt="resources" className="w-80 h-40 ml-auto mr02 mt-auto mb-0" />

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


                <div className="sticky top-20 h-60 bg-white border-2 p-6 m-4  w-4/12">
                    <input
                        placeholder="Share a resource url"
                        className="text-xl bg-gray-50 border-2 w-full p-2 rounded" />


                   
                    <button className=" flex mx-auto text-xl bg-gray-700 text-white p-2 px-4 my-2 rounded">Submit</button>
                </div>


            </div>
        </div>
    );
}

export default Resources;