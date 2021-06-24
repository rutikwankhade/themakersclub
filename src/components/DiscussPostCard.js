import React from 'react';
import profileImg from '../assets/icons/profile.svg'

const DiscussPostcard = () => {
    return (
          <div className="border-2 p-6 rounded-md bg-white">
                        <h1 className="text-2xl font-semibold">What are tools required to start blogging?</h1>
                        <p className="text-xl p-2">I have been looking for resources that are really good for use in our database. share please your thoughts...</p>

                        <div className="flex flex-row mt-2">

                            <div className="flex">
                                <img src={profileImg} alt="profile" className="h-8 w-8" />
                                <span className="text-md m-1">Rutik Wankhade</span>

                            </div>
                            <span className="ml-auto mr-2 border-2 px-2 rounded">0 replies</span>
                        </div>
                    </div>
     );
}
 
export default DiscussPostcard;