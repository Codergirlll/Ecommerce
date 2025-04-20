
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>

   
    </>
  );
}

export default App;
