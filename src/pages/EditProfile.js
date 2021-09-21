import React from 'react';
// import userImg from '../assets/icons/profile.svg'
import { useForm } from "react-hook-form";
import { editProfile } from '../actions/profile';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'

const EditProfile = ({ editProfile, loading }) => {

        const history = useHistory();


    const { register, handleSubmit } = useForm();
    

    const handleProfileUpdate = (data) => {
        console.log(data)
        editProfile(data);
        if (!loading) {
            setTimeout(() => {
                history.push('/my-profile')
            }, 2000)
        }



    }

    return (
        <div className="bg-gray-50 p-10">

            <div>

                <form
                    onSubmit={handleSubmit(handleProfileUpdate)}
                    className="flex flex-col  bg-white p-10 px-20 border md:w-10/12">
                    <h1 className="text-2xl font-semibold mb-6">Edit Profile</h1>

                    {/* <div className="flex items-center  my-2">
                        <img src={userImg} alt="user" className="w-20 h-20" />
                        <input type="file" className="px-6"></input>
                    </div> */}



                    <div className=" flex flex-col mb-6 w-10/12">
                        <h1 className="text-xl mr-7 text-gray-600">Tell us a little about yourself</h1>
                        <input
                            placeholder="Add a short bio"
                            className="text-xl w-full h-20 border bg-gray-50 p-2 my-2 rounded"
                            {...register("bio")}

                        />
                    </div>

                    <div className=" flex items-center w-10/12">
                        <h1 className="text-xl mr-7 text-gray-600">Website</h1>
                        <input
                            placeholder="https://rutikwankhade.dev"
                            className="text-xl w-full  border bg-gray-50 p-2 m-2 rounded"
                            {...register("website")}

                        />
                    </div>


                    <div className=" flex items-center w-10/12">
                        <h1 className="text-xl mr-10 text-gray-600">Twitter</h1>
                        <input
                            placeholder="https://twitter.com/WankhadeRutik"
                            className=" text-xl w-full  border bg-gray-50 p-2 m-2 rounded"
                            {...register("twitter")}

                        />
                    </div>

                    <div className=" flex items-center w-10/12">
                        <h1 className="text-xl mr-10 text-gray-600">Github</h1>
                        <input
                            placeholder="https://github.com/rutikwankhade"
                            className="text-xl w-full  border bg-gray-50 p-2 m-2 rounded"
                            {...register("github")}

                        />
                    </div>

                    <div className=" flex items-center w-10/12">
                        <h1 className="text-xl mr-6 text-gray-600">Linkedin</h1>
                        <input
                            placeholder="https://www.linkedin.com/in/rutik-wankhade/"
                            className="text-xl w-full  border bg-gray-50 p-2 m-2 rounded"
                            {...register("linkedin")}

                        />
                    </div>

                    <button
                        type="submit"
                        className="text-xl bg-purple-400 hover:bg-purple-500 text-white rounded px-6 py-2 w-1/4 mt-2">
                        Update
                    </button>

                </form>
            </div>

        </div>
    );
}

const mapStateToProps = state => ({
    loading: state.profileReducer.loading
})


export default connect(mapStateToProps, {editProfile})(EditProfile);