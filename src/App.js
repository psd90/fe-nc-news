import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";


function App() {
  return (
    <div className="App-div">
      <Navbar />
      <Header />
      <Router>
        <Articles path="/" />
        <Articles path="/topics/:slug" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
