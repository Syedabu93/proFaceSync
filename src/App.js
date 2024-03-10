import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
// import Events from './components/events';
import Matrices from "./components/matrices";
import Footer from "./components/footer";
import Works from "./components/how it works";
import About from "./components/About";
import Demo from "./components/demo";
import { Routes, Route } from "react-router-dom";
import { Features } from "./components/features";
import Contact from "./components/contact";
import Blog from "./components/blog";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <About/> */}
      <Routes>
        <Route
          path="/"
          exact
          element={
            <div>
              {" "}
              <Banner />
              <Matrices />
              <Demo />
              <Features/>
              <Works />{" "}
            </div>
          }
        >

        </Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Features" element={<Features />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Works" element={< Works/>}></Route>
        <Route path="/blog" element={< Blog/>}></Route>

        </Routes>
      <Footer />
    </div>
  );
}

export default App;
