// import './App.css';
// import Nav from './Nav';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Footer from './Footer';
// import SignUp from "./SignUp";
// import Private from './Private';
// import Login from "./Login"
// import Addproduct from './Addproduct';
// import Productlist from './Productlist'
// import Updatepro from './Updatepro';
// import Profile from './Profile'


// function App() {
//   return (
//     <div >
//        <BrowserRouter>
//        <Nav/>
//        <Routes>
//         <Route element={<Private/>}>
//         <Route path="/" element={<Productlist/>}/>
//         <Route path="/add" element={<Addproduct/>}/>
//         <Route path="/Updatepro/:id" element={<Updatepro/>}/>
//         <Route path="/logout" element={<h1>logout component</h1>}/>
//         <Route path="/profile" element={<Profile />}/>
//         </Route>
//         <Route path="/signup" element={<SignUp/>} />
//         <Route path='/login' element={<Login />} />
//         </Routes>
//        </BrowserRouter>
//        <Footer />
  
//     </div>
//   );
// }


// export default App;

import './App.css';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import SignUp from "./SignUp";
import Private from './Private';
import Login from "./Login"
import Addproduct from './Addproduct';
import Productlist from './Productlist'
import Updatepro from './Updatepro';
import Profile from './Profile'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Private />}>
            <Route index element={<Productlist />} />
            <Route path="/add" element={<Addproduct />} />
            <Route path="/Updatepro/:id" element={<Updatepro />} />
            <Route path="/logout" element={<h1>logout component</h1>} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
