import React, { useState, useEffect } from 'react';
import ShowcasePostCard from '../components/ShowcasePostCard';

import { connect } from 'react-redux'
import { addShowcasePost, getAllShowcasePosts } from '../actions/showcasePost'
import feedbackImg from '../assets/images/review.png'
import Skeleton from 'react-loading-skeleton';
import { useForm } from 'react-hook-form';



const Feedback = ({ loading, isAuthenticated, showcasePosts, addShowcasePost, getAllShowcasePosts }) => {

    // const [showcaseUrl, setShowcaseUrl] = useState('');
    // const [showcaseText, setShowcaseText] = useState('');
    // const [showcaseTitle, setShowcaseTitle] = useState('');
    const { register, handleSubmit } = useForm();


    useEffect(() => {
        getAllShowcasePosts();
    }, [getAllShowcasePosts])

    const postShowcase = (data) => {
        const { showcaseTitle, showcaseUrl, showcaseText } = data;

        console.log(showcaseUrl, showcaseText, showcaseTitle)
        addShowcasePost({ showcaseUrl, showcaseTitle, showcaseText });

        setTimeout(() => {
            window.location.reload()
        }, 2000)

    }


    return (
        <div className="bg-gray-50">
            <div className="flex md:flex-row flex-col">
                <div className="md:w-8/12">

                    <div className="flex md:flex-row flex-col bg-purple-100 my-2 ">
                        <div className=" m-10">
                            <h1 className="text-4xl my-2 font-bold">Showcase and Feedback</h1>
                            <p className="text-xl ">Showcase what you built and get constructive feedback from the members of the makersclub.</p>
                        </div>
                        <img src={feedbackImg} alt="review" className=" md:w-80 md:h-40 mt-auto mb-0 ml-auto mr-2 " />
                    </div>

                    <div>
                        {showcasePosts.data && showcasePosts.data.map(post => {
                            return <ShowcasePostCard post={post} />
                        })}

                    </div>

                </div>

                <div className="md:w-4/12 flex md:flex-col">
                    {loading ? <Skeleton height={200} width={320} className="h-80 m-4" /> :
                        <div className="sticky md:top-20 ">

                            {!isAuthenticated ?
                                <div className="rounded bg-white border m-4 p-4">
                                    <div className="flex flex-row flex-wrap justify-center">
                                        <div className="rounded m-2 p-6 bg-yellow-100 text-5xl opacity-80">👨‍💻</div>
                                        <div className="rounded m-2 p-6 bg-green-100 text-5xl opacity-80">🛠</div>
                                        <div className="rounded m-2 p-6 bg-pink-100 text-5xl opacity-80">‍💬</div>
                                        <div className="rounded m-2 p-6 bg-purple-100 text-5xl opacity-80">🚀</div>

                                    </div>
                                    <button className="my-2 rounded bg-purple-400 hover:bg-purple-500 px-6 py-2 flex text-white text-2xl mx-auto">Sign up now</button>
                                    <h1 className="text-xl font-semibold m-6 text-center">and share what you built with the makersclub.</h1>
                                </div>
                                :

                                <div className="rounded bg-white border m-4 p-4">
                                    <form onSubmit={handleSubmit(postShowcase)}>
                                        <h1 className="text-xl m-2">Hey everyone, I built</h1>

                                        <input
                                            required
                                            {...register("showcaseTitle")}

                                            // onChange={(e) => setShowcaseTitle(e.target.value)}
                                            placeholder="themakersclub"
                                            className="my-2 text-xl bg-gray-50 border-2 w-full p-2 rounded" />

                                        <input
                                            required
                                            {...register("showcaseUrl")}

                                            // onChange={(e) => setShowcaseUrl(e.target.value)}
                                            placeholder="https://makerclub.vercel.app"
                                            className="text-xl bg-gray-50 border-2 w-full p-2 rounded" />

                                        <textarea
                                            required
                                            {...register("showcaseText")}

                                            // onChange={(e) => setShowcaseText(e.target.value)}
                                            placeholder="What's your project is about?"
                                            className="my-2 h-60 text-xl bg-gray-50 border-2 w-full p-2 rounded" />
                                        <button
                                            onClick={() => handleSubmit()}
                                            className=" flex mx-auto text-xl bg-gray-700 text-white p-2 px-4 my-2 rounded">Showcase</button>
                                    </form>
                                </div>
                            }
                        </div>
                    }
                </div>

            </div>

        </div>
    );
}

const mapStateToProps = state => ({
    showcasePosts: state.showcasePostsReducer.showcasePosts,
    isAuthenticated: state.authReducer.isAuthenticated,
    loading: state.authReducer.loading


})

export default connect(mapStateToProps, { addShowcasePost, getAllShowcasePosts })(Feedback);