import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from '../Home';
import Main from '../Main';
import './nav.css';

// const Index = () => <h2>Home</h2>;
// const About = () => <h2>Truth</h2>;

class Nav extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/" className="home-nav">Home</Link>
          </nav>
          <Route path="/" exact component={Index} />
          <Route path="/main/" component={Main} />
        </div>
      </Router>
    );
  }
}


export default Nav;
//<Route path="/test/" component={Test} />
// <Router>
        //   <div>
        //     <nav>
        //         <li>
        //             <Link to="/">Home</Link>
        //         </li>
        //         <li>
        //             <Link to="/about/">About Us</Link>
        //         </li>
        //     </nav>

        //     <Route path="/" exact component={Index} />
        //     <Route path="/about/" component={About} />
        //   </div>
        // </Router>