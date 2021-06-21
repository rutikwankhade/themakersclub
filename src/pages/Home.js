import React from 'react';
import Header from '../components/Header'

const Home = () => {
    return (
        <div>

            <Header />
            <div className="bg-white border-2 border-gray-600 rounded w-10/12 p-10 transform -translate-y-10 mx-auto">
                <p className="text-2xl text-center font-semibold">👨‍💻 Build + 📝 Get Feedback +  🤹 Learn =  ✨ Magic     </p>
            </div>
            <h1>Home page</h1>
        </div>
    );
}

export default Home;