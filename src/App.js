import './App.css';
import Header from './components/Header';
import Home from './screens/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup';
function App() {
  return (
    <FavProvider>
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/createuser" element={<Signup></Signup>}></Route>
      </Routes>
  
      </div>
    </Router>
    </FavProvider>
  );
}

export default App;
