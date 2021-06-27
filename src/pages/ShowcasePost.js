import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getShowcasePost } from '../actions/showcasePost'

const ShowcasePost = ({ getShowcasePost, showcasePost ,match }) => {
    
    useEffect(() => {
        getShowcasePost(match.params.id);
},[getShowcasePost,match])


    return (
        <div className="bg-gray-50 flex p-12">

            <div className="border bg-white  w-8/12 h-60 p-10">
                <p className="text-xl">{showcasePost && showcasePost.data[0].showcaseText }</p>

            </div>
            
            <div className="border bg-white mx-2  w-4/12 h-60">
                <div></div>

            </div>
        </div>
     );
}
const mapStateToProps = state => ({
    showcasePost: state.showcasePostsReducer.showcasePost
    
})
 
export default connect(mapStateToProps,{getShowcasePost})(ShowcasePost) ;