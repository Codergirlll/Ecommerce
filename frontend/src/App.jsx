import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import allCountries from "../src//assets/static/country.json";

// ✅ Move it here
export const CountryContext = createContext();

function App() {
  return (
    <>
      <CountryContext.Provider
        value={{
          allCountries,
        }}
      >
        {/* {children} */}

        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </CountryContext.Provider>
    </>
  );
}

export default App;
