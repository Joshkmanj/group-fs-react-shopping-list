import React from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    const addItem = () => {
        axios.post('/list', {})
    }
    
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
