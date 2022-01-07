import React from "react";
import Login from "./pages/Login";
import Searcher from "./pages/Searcher";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Context from "./context/AuthContext";
import Menu from "./components/Navbar";
import "./App.css";

// TODO : Redirect to previous path once our Credentials were correctly introduced.
function App() {
  return (
    <>
      <BrowserRouter>
        {/* {/* <Link to="/login">Login</Link> */}
        {/* <Link to="/">Home</Link> */}
        {/* Context provider wraps our Pages, so the pages can access to the Context props */}
        <Context.Provider value={localStorage.superHeroToken}>
          {/* Routes also wraps our pages, so the children can use React Router functionalitys. */}
          <Menu></Menu>
          <Routes>
            <Route path="/searcher" element={<Searcher />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
