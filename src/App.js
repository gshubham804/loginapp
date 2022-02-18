import './App.css';
import Login from './Components/main';
import Welcomepage from './Components/welcome.jsx';
import AfterLoginPage from './Components/afterlogin';
import SignUpPage from './Components/signup'
import Navbarpage from './Components/navbar'
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';

 function App() {
  return (
    <>
       <Router> 
         <Navbarpage/>
         <Routes>
         <Route exact path='/' element={<Welcomepage/>}/> 
         <Route exact path='/login' element={<Login/>}/> 
         <Route exact path='/logged' element={ <AfterLoginPage/>}/> 
         <Route exact path='/signUpForm' element={ <SignUpPage/>}/>
         </Routes>
       </Router>
    </>
  );
}

export default App;
