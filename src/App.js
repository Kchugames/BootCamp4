
import './App.scss';
import ParentComponent from './Component/Parent_Component';
import Theme from './themeApp/Theme';
import Timer from './TimerApp/Timer';
import ToDoAppHome from './ToDoApp/todoapphome';
// import Beep from './BeepBin/beep';
import { BrowserRouter, Route } from 'react-router-dom';
// above could be written as {BrowserRouter as Router, Route} if you want to use Router as shorter name
import SideNav from './Common/SideNav';
import Home from './Common/Home.Js';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
      <SideNav/> 

      <Route exact path="/">
        <Home/>
      </Route>

      <Route path='/theme'>
      <Theme/>
        {/* theme app */}
      </Route>

      <Route path='/timer'>
        <Timer/>
      </Route>

      <Route path="/todo">
        <ToDoAppHome/>
      </Route>

      {/* <ParentComponent/> */}

      {/* <Beep/>  */}
      
    </div>
    </BrowserRouter>
  );
};



export default App; <ToDoAppHome/>
