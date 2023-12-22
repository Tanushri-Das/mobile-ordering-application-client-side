// import React from "react";
// import Header from "../Components/Shared/Header/Header";
// import { Outlet } from "react-router-dom";
// import Footer from "../Components/Shared/Footer/Footer";

// const Main = () => {
//   return (
//     <div>
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// export default Main;

// Main.jsx
import React from "react";

import Header from "../Components/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";


const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
