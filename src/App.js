import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Form from "./components/Form";
import Review from "./components/Review";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Review" element={<Review />} />
      </Routes>
    </>
  );
}

export default App;
