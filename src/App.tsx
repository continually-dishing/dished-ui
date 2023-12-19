import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import EntryPoint from "./screens/Entry/Entry";
import SignUp from "./screens/SignUp/SignUp";
import Recipes from "./screens/Recipes/Recipes";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import WeekView from "./components/WeekView/WeekView";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EntryPoint />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="weekly-menu" element={<WeekView />} />
        </Routes>
        <NavigationBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
