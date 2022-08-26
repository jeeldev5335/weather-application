import React from "react";
import Weather from "./Components/Layouts/Weather";
// import Home from "./Components/Layouts/Home";
import NavBar from "./Components/NavigationBar/NavigationBar";


function App() {
  return (
    <React.Fragment>
      <NavBar />
      {/* <Home /> */}
      <Weather />
    </React.Fragment>
  );
}

export default App;
