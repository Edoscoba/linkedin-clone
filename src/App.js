//  import { Route, Routes } from 'react-router-dom';

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";


function App() {
  alert(`Please bear with me,\n i was not able to complete it cause of some errors i have being getting \n Promising to complete it in no time`)
  return (
   <div className="App">
     {/* <Routes>
       <Route path="/Login" element={<Login/>}> </Route>
  
    </Routes> */}
  
     <Login/>
    <Header/>
    <Home/>
   </div>

  );
}

export default App;
