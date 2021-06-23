import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

import Feedback from './pages/Feedback';
import Resources from './pages/Resources';
import Discussions from './pages/Discussions';

//redux
import { Provider } from 'react-redux';
import store from './store';


const App = () => {
  return (
    <Provider store={store}>
      <div className=" md:px-20">


        <Router>
          <div className="sticky top-0 z-10">
            <Navbar />
          </div>
          <div className="flex flex-row">

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
            </div>
          </div>

        </Router>


      </div>
    </Provider>
  );
}

export default App;
