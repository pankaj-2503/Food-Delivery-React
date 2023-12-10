import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import HeadlineCard from "./components/HeadlineCard";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <HeadlineCard />
       <Food />
       <Category />
    </div>
  );
}

export default App;
