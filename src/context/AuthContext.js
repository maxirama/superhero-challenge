import React from "react";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";

// CONTEXT:
// A context is an object that can be executed from any place in our app.
// Our context has two components:
//                              a consumer (to consume the Context object)
//                              a provider (to provide the Context object)
// If we dont pass any value to the provider, it will have the value of our whole object.
// In case we use a provider, we would need to pass a value as a prop.

const Context = React.createContext({ token: "pedro" });

// // We can create our own provider:
// export const AuthContext = ({ children }) => {
//   return (
//     <Context.Provider value={`localStorage.superHeroToken`}>
//       {children}
//       {/*
//         <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="login" element={<Login />} />
//         </Routes>
//         */}
//     </Context.Provider>
//   );
// };

export default Context;
