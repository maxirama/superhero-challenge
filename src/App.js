import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Context from "./context/AuthContext";

// Imports:
//  Default => Same name as the default export
//  {ImportOne, ImportTwo} (Naming import) => More than one export from the file
// const NavBar = () => {
//   // If we want our React router to work, we need to enclose our router elements in a Router tag, in this case, we use BrowserRouter tag.
//   // Route component i.e: <Route path='login'><Home/></Route> : Check the path, and then render in case that matches.
//   // Switch components: prevents multiple pathing, and renders only the first path match.
//   return (
//     <>
//       <BrowserRouter>
//         <Link to="/login">Login</Link>
//         <Link to="/home">Home</Link>
//       </BrowserRouter>

//       <Switch>
//         <Route path="/login">{/* <Login/> */}</Route>
//         <Route path="/home">{/*<Home/>*/}</Route>
//       </Switch>
//     </>
//   );
// };

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
