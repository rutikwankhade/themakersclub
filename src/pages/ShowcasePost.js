import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getShowcasePost } from '../actions/showcasePost'
import profileImg from '../assets/icons/profile.svg'
import linkIcon from '../assets/icons/link.svg'


const ShowcasePost = ({ getShowcasePost, showcasePost, match }) => {

    useEffect(() => {
        getShowcasePost(match.params.id);
    }, [getShowcasePost, match])


    return (
        <div className="bg-gray-50 flex p-12">

            <div className="border bg-white  w-8/12 h-60 p-10">
                <div className="flex">
                    <h1 className="text-3xl capitalize py-2 font-semibold">{showcasePost && showcasePost.data[0].showcaseTitle}</h1>

                    <a href={showcasePost && showcasePost.data[0].showcaseUrl} target="_blank" rel="noreferrer" className="ml-auto mr-4 ">
                        <img src={linkIcon} alt="profile" className=" cursor-pointer h-10 w-10  bg-pink-100  hover:bg-purple-100 rounded-full p-2" />
                    </a>
                </div>
                <p className="text-xl py-2">{showcasePost && showcasePost.data[0].showcaseText}</p>

            </div>

            <div className="border bg-white mx-2  w-4/12 h-60">
                <h1 className="text-xl text-right bg-gray-50 font-semibold px-4 p-2">Maker</h1>
                <div className="flex flex-col justify-center items-center">
                    <img src={profileImg} alt="profile" className="w-24 h-24 mt-6" />
                    <h3 className="my-2 text-xl ">{showcasePost && showcasePost.data[0].userName}</h3>
                </div>

            </div>
        </div>
    );
}
const mapStateToProps = state => ({
    showcasePost: state.showcasePostsReducer.showcasePost

})

export default connect(mapStateToProps, { getShowcasePost })(ShowcasePost);