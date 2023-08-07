import "./App.css";
// import Example from "./Example";

import MyProfile from "./component/Sell";
import Hookscomp from "./component/Library";
import About from "./component/About";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./component/Shop";
import Sell from "./component/Sell";
import Library from "./component/Library";
function App() {
  let name = "Kamesh";
  return (
    <Router>
      <div className="App">
        <Header />

        {/* <Example name={name} /> */}
        <Routes>
          <Route path="/about" element={<About name={name} />} />

          <Route path="/Library" element={<Library />} />
          <Route path="/Buy" element={<Shop />} />

          <Route path="/Sell" element={<Sell />} />
        </Routes>

        {/* <MyProfile name={name} /> */}
      </div>
    </Router>
  );
}

export default App;
