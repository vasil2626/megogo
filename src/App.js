import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Movie from "./components/movie/Movie";

function App() {
  return (
    <div className="App wrapper">
    
      <Navbar />
      <Routes>
        <Route  path="/" exact element={<Header/>}/>
        <Route  path="/movie" exact element={<Movie/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
