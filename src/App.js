// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Concept from "./components/Concept";
import Abonnements from "./components/Abonnements";
import Clubs from "./components/Clubs";
import Activites from "./components/Activites";
import Products from "./components/Products";
import Register from "./components/Register";
import Login from "./components/Login";
import MemberSpace from "./components/MemberSpace";

import BurningPark from "./components/BurningPark";
import FightPark from "./components/FightPark";
import CyclePark from "./components/CyclePark";
import WaterStation from "./components/WaterStation";
import Boditrax from "./components/Boditrax";
import Hydromassage from "./components/Hydromassage";
import Sismo from "./components/Sismo";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/concept" element={<Concept />} />
            <Route path="/abonnements" element={<Abonnements />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/activites" element={<Activites />} />
            <Route path="/boutique" element={<Products />} />
            <Route path="/inscription" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mon-espace" element={<MemberSpace />} />

            {/* New Secondary Pages */}
            <Route path="/burning-park" element={<BurningPark />} />
            <Route path="/fight-park" element={<FightPark />} />
            <Route path="/cycle-park" element={<CyclePark />} />
            <Route path="/water-station" element={<WaterStation />} />
            <Route path="/boditrax" element={<Boditrax />} />
            <Route path="/hydromassage" element={<Hydromassage />} />
            <Route path="/sismo" element={<Sismo />} />

          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

