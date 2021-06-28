import React, { useState, useEffect } from 'react';

import metaFetcher from 'meta-fetcher';

const UrlPreview = ({ url }) => {

    const [urlImg, setUrlImg] = useState('')
    const [urlTitle, setUrlTitle] = useState('')

    const getMetaData = async () => {
        const result = await metaFetcher('https://hoppscotch.io/');
        console.log(result);
    }
        useEffect(() => {
            getMetaData()

        })

        return (
            <div>
                <div>
                    <h1>{ url}</h1>
                    {/* <img src={ } /> */}
                </div>
            </div>
        );
    
}

    export default UrlPreview;