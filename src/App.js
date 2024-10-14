import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/header";
import SignUp from "../src/components/signUp";
import Login from "../src/components/login";
import RequireAuth from "./components/requireauth";
import HomePage from "./components/homePage";
import CategoryPage from "./components/CategoryPage"; // New component
import Bag from "./components/bags";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/luxury" element={<LuxuryPage />} />
        <Route path="/category/:category" element={<CategoryPage />} /> 
        <Route
          path="/cliq-cash"
          element={
            <RequireAuth>
              <CliqCashPage />
            </RequireAuth>
          }
        />
        <Route path="/gift-card" element={<GiftCardPage />} />
        <Route path="/cliq-care" element={<CliqCarePage />} />
        <Route
          path="/track-orders"
          element={
            <RequireAuth>
              <TrackOrdersPage />
            </RequireAuth>
          }
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bag" element={<Bag />} />
      </Routes>
    </Router>
  );
};

const LuxuryPage = () => <div>Luxury Page</div>;
const CliqCashPage = () => <div>CLiQ Cash Page</div>;
const GiftCardPage = () => <div>Gift Card Page</div>;
const CliqCarePage = () => <div>CLiQ Care Page</div>;
const TrackOrdersPage = () => <div>Track Orders Page</div>;

export default App;
