//import logo from './logo.svg';
import { Route,   Routes } from 'react-router-dom';
import Home from './routing/Home';
import About from './routing/About';
import Nomatch from './routing/Nomatch';
import './App.css';
import {Navbar} from './routing/Navbar';
import LocationDisplay from './routing/LocationDisplay';
import BlogPost from './routing/BlogPost';
import React from 'react';
//import contact from './routing/contact';
//import { ComponentC } from './hooks/CompoentsC';


//export const UserContext=React.createContext()
//export const AddressContext=React.createContext()
//function App() {
  //return (
    //<div className="App">
       //<hr/>
     //<h2>------------------output of useContext hook-----------------</h2>
//<UserContext.Provider value={"Ram"}>
  //<AddressContext.Provider value={'Pune'}>
  //<ComponentC/>
  //</AddressContext.Provider>
//</UserContext.Provider>
//<hr></hr>
     //<footer>Powered By ITVEDANT </footer>
    ///</div>
  //);
//}

function App() {
  return(
    <div className="App">
      <LocationDisplay></LocationDisplay>
      <BlogPost></BlogPost>
      <hr></hr>
      
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='about/next' element={<Home/>}></Route>
      <Route path='*' element={<Nomatch/>}></Route>
      <Route path='blogpost/:id' element={<BlogPost/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='contact' element={<contact/>}></Route>
      </Routes>
      <br/>
      <Navbar/>
    </div>
  );
}

export default App;
