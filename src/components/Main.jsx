import React from "react";
import Header from '../components/Header';
import Categories from '../components/Categories';
import TopProduct from '../components/toppruduct';
import '../Home.css';

function Main() {
    return (
        <div className="home-page">
            <Header/>   
            <Categories/>
            <TopProduct/>
        </div>  
    );
    
}
export default Main;