import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import "./App.css";

function App() {
  const [groceryList, setGroceryList] = useState([]);

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
    </div>
  );
}

export default App;
