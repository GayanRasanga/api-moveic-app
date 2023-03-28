import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/heder/Header";
import SimpleBottomNavigation from "./components/NavMain";
import { Container } from "@material-ui/core";
import Home from "./pages/Home";
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
             <Route path="/home" element={<Home/>} />
             <Route path="/about" element={<About/>} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
