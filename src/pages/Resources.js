import React from 'react';
import resourcesImg from '../assets/images/resources.png'

import { LinkPreview } from '@dhaiwat10/react-link-preview';


const Resources = () => {
    return (
        <div className="">
            <div className="flex px-10 pt-10  my-2 bg-green-100">
                        <div className="m-10">
                            <h1 className="text-4xl my-2 font-bold">Share resources</h1>
                            <p className="text-xl ">Share helpful resources. And find them curated at one place for everyone.</p>
                </div>
                                        <img src={resourcesImg} alt="resources" className="w-1/3" />

                    </div>

            <div>
            share and find resources
            <LinkPreview url='https://tabwave.vercel.app/' width="25%" className="m-2" height="250px" />
            <LinkPreview url='https://tabwave.vercel.app/' width="25%" className="m-2" height="250px" />

</div>
        </div>
    );
}

export default Resources;