import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/SearchCard/Search";
import Jobs from "./components/JobCard/Jobs";
import Value from "./components/ValueCard/Value";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  );
};

export default App;
