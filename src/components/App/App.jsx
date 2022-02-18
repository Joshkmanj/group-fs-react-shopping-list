import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import GroceryItem from "../GroceryItem/GroceryItem.jsx";

import "./App.css";
console.log("App.jsx loaded?");
function App() {

  const [groceryList, setGroceryList] = useState([]);


  console.log("Is this working?");
  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axios
      .get("/list")
      .then((response) => {
        setGroceryList(response.data);
      })
      .catch((error) => {
        console.log("getList error", error);
      });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <p>Under Construction...</p>
      </main>
      <GroceryItem list={groceryList}  />
    </div>
  );
}

export default App;
