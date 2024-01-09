import logo from './logo.svg';
import './App.css';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Addtask from "./tasks/Addtask";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EditTask from './tasks/Edittask';
import ViewTask from './tasks/Viewtask';
function App() {
  return <div className="App">
    <Router>

    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/addtask" element={<Addtask/>}/>
      <Route exact path="/edittask/:id" element={<EditTask/>}/>
      <Route exact path="/viewtask/:id" element={<ViewTask/>}/>
    </Routes>
   

    </Router>
    
    </div>
}

export default App;
