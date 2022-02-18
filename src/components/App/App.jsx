import GroceryForm from '../GroceryForm/GroceryForm.jsx';
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
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


    const addItem = (item, quantity, unit) => {
        axios.post('/list', {itemInfoList: {name: item, quantity: quantity, unit: unit}})
        .then(response =>{
            console.log('items added');
            getList();
        })
        .catch(err =>{
            console.log('error', err);
        })
    }
    


  return (
    <div className="App">
      <Header />
      <main>
        <p>Under Construction...</p>
        <GroceryForm taco={addItem}/>
      </main>
    </div>
  );

}

export default App;
