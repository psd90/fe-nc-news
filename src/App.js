import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Comments from "./components/Comments"


function App() {
  return (
    <div className="App-div">
      <Navbar />
      <Header />
      <Router>
        <Article path="/articles/:article_id" />
        <Articles path="/" />
        <Articles path="/topics/:topic" />
        <Comments path="/articles/:article_id/comments" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
