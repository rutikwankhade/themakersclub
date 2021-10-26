import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

import Feedback from './pages/Feedback';
import Resources from './pages/Resources';
import Discussions from './pages/Discussions';
import LeaderBoard from './pages/LeaderBoard';
import UserProfile from './pages/UserProfile';
import EditProfile from './pages/EditProfile';



import PostNewDiscussion from './pages/PostNewDiscussion';
import DiscussPost from './pages/DiscussPost';
import ShowcasePost from './pages/ShowcasePost';




//redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken'



const App = () => {

  useEffect(() => {

    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    store.dispatch(loadUser());
  }, [])


  return (
    <Provider store={store}>
      <div className=" md:px-20">


        <Router>
          <div className="sticky top-0 z-10">
            <Navbar />
          </div>
          <div className="flex md:flex-row flex-col-reverse">

            <div className="sticky top-20">
              <Sidebar />

            </div>

            <div className="w-full border-l-2 px-4 ">
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />


              <Route exact path="/showcase-feedback" component={Feedback} />
              <Route exact path="/discussions" component={Discussions} />
              <Route exact path="/resources" component={Resources} />
              <Route exact path="/leaderboard" component={LeaderBoard} />

              <PrivateRoute exact path="/post-discussion" component={PostNewDiscussion} />

              <PrivateRoute exact path="/profile/:id" component={UserProfile} />
              <PrivateRoute exact path="/edit-profile" component={EditProfile} />

              <Route exact path="/discussions/:id" component={DiscussPost} />
              <Route exact path="/posts/:id" component={ShowcasePost} />


            </div>
          </div>

        </Router>


      </div>
    </Provider>
  );
}

export default App;
