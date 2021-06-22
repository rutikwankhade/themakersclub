import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Feedback from './pages/Feedback';
import Resources from './pages/Resources';
import Discussions from './pages/Discussions';



const App = () => {
  return (
    <div className=" px-20">


        <Router>
        <Navbar />
              <div className="flex flex-row">


          <Sidebar />

          <div className="w-full border-l-2 px-4 ">
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />

            <Route exact path="/showcase-feedback" component={Feedback} />
            <Route exact path="/discussions" component={Discussions} />
            <Route exact path="/resources" component={Resources} />
          </div>
      </div>

        </Router>


    </div>
  );
}

export default App;
