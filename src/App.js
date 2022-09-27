import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Home from './screens/Home/Home';
import WeeklyMenu from './screens/WeeklyMenu/WeeklyMenu';


function App() {
  return (
    <div>
    <NavigationBar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} >
        </Route>
      </Routes>
      <Routes>
        <Route path="/weeklyMenu" element={<WeeklyMenu />}>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
