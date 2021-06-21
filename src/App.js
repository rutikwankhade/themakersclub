import React from 'react';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Feedback from './pages/Feedback';
import Resources from './pages/Resources';
import Discussions from './pages/Discussions';






const App = () => {
  return (
    <div className=" px-20">

      <Navbar />
      <div className="flex flex-row">
        <Sidebar />


        <div className="w-11/12 ">
          <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/showcase-feedback" component={Feedback} />
            <Route exact path="/discussions" component={Discussions} />
            <Route exact path="/resources" component={Resources} />


          </BrowserRouter>

        </div>

      </div>

    </div>
  );
}

export default App;
