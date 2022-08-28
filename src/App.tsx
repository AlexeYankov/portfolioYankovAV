import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import BodyMain from "./components/body/BodyMain";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <BodyMain/>
            <Footer/>
        </div>
    );
}

export default App;
