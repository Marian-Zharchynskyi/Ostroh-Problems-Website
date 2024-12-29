import React from "react";
import { BrowserRouter } from "react-router-dom";
import BasicRoute from "./components/routes/BasicRoute";

function App() {
  return (
    <BrowserRouter>
      <BasicRoute />
    </BrowserRouter>
  );
}

export default App;
