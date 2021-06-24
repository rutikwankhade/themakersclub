import React from 'react';

import { LinkPreview } from '@dhaiwat10/react-link-preview';


const Resources = () => {
    return (
        <div className="flex  justify-center">
            share and find resources
            <LinkPreview url='https://tabwave.vercel.app/' width="25%" className="m-2" height="250px" />
            <LinkPreview url='https://tabwave.vercel.app/' width="25%" className="m-2" height="250px" />


        </div>
    );
}

export default Resources;