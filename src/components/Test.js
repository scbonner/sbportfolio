
import React from 'react';
import CSS from '../css/normalize.css';


const Test = () => {
    return(
        
<div className="jumbotron jumbotron-fluid">
  <div className="container-fluid">
    <h1>Bootstrap Tutorial</h1>      
    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
    <h1>Bootstrap Tutorial</h1>    
    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
  </div>
  
</div>

    
    
    );
}


export default Test;




// //App






// import Header from './Header';
// // import Home from './Home';
// import Title from './Title';
// // import Footer from './Footer';
// // import Landing2 from './Landing2';
// // import Landing1 from './Landing1';
// import About from './About';
// import Projects from './Projects';
// import Courses from './Courses';
// import Follow from './Follow';
// import Contact from './Contact';
// import Test from './Test';
// import NotFound from './NotFound';
// import Featured from './Featured';



// const App = () => {
//     return (
//     <BrowserRouter>
//         <div className="container"> 
//             <div className= "wrap">

//             <Header />
//             <Switch>
//             {/* <Route exact path="/" component={Home} 
//             />  */}
//              <Route exact path="/title" component={Title} />
//             <Route path="/about" component={About} />
//             <Route path="/projects" component={Projects} />
//             <Route path="/projects/:description:title" component={Featured} />
//             <Route path="/courses" component={Courses} />
//             <Route path="/follow" component={Follow} />
//             <Route path="/contact" component={Contact} />
//             <Route path="/test" component={Test} /> 
//             <Route component={NotFound} />
//             </Switch>
//         </div>
//       {/* <Footer /> */}
    
//     </div>
//    </BrowserRouter>
//     )  
// };




// export default App;


// // import React, { Component } from 'react';
// import CSS from '../css/index.css';


// class Header extends Component {
//     render() {
//         return (
//     <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-3">
//     <div class="container-fluid">
//         <a href="strance" class="navbar-brand mr-3">Sadric Bonner</a>
//         <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarCollapse">
//             <div class="navbar-nav ml-auto">
            
//                 {/* <a href="home" class="nav-item nav-link active">Home</a> */}
                
//                  <a href="title" class="nav-item nav-link">Title</a>
//                 <a href="about" class="nav-item nav-link">About</a>
//                 <a href="projects" class="nav-item nav-link">Projects</a>
//                 <a href="courses" class="nav-item nav-link">Courses</a>
//                 <a href="follow" class="nav-item nav-link">Follow</a>
//                 <a href="contact" class="nav-item nav-link">Contact</a>
//             </div>
//             </div>
            
//         </div>    
// </nav>  
//             );
//         }
//      }
              
   
 


   
 
// export default Header;



// //Featured

// import React from 'react';

// const Featured = ({match}) => {
//     let title = match.params.title;
//     let description = match.params.description;

//     return (
//         <div className="main-content">
//         <h2>{title}</h2>
//         <p>Introducing <strong></strong>, a teacher who loves teaching courses about <strong>{description}</strong>!</p>
//         </div>
//   );
// }

// export default Featured;