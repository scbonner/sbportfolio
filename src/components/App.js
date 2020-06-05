import React from 'react';
import CSS from '../css/normalize.css';
import {
    BrowserRouter,
    // Route,
    Switch
} from 'react-router-dom';


// Components

// import Home from './Home';
import Test from './Test';
// import NotFound from './NotFound';
// import Featured from './Featured';


// import Header from './Header';
// import Home from './Home';
// import Title from './Title';
// import Footer from './Footer';
// import Landing2 from './Landing2';
// import Landing1 from './Landing1';
// import About from './About';
// import Projects from './Projects';
// import Courses from './Courses';
// import Follow from './Follow';
// import Contact from './Contact';

// import NotFound from './NotFound';
// import Featured from './Featured';



const App = () => {
    return (
    <BrowserRouter>
        <div className="container"> 
            <div className= "wrap">

            <Test />
            <Switch>
            {/* <Route exact path="/" component={Home} 
            />  */}
             {/* <Route exact path="/title" component={Title} /> */}
             {/* <Route path="/test" component={Test} />  */}
            {/* <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/projects/:description:title" component={Featured} />
            <Route path="/courses" component={Courses} />
            <Route path="/follow" component={Follow} />
            <Route path="/contact" component={Contact} /> */}
            
            {/* <Route path="/notfound" component={NotFound} /> */}
            </Switch>
        </div>
      {/* <Footer /> */}
    
    </div>
   </BrowserRouter>
    )  
};




export default App;