import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Cards from "../components/Cards";
import React from "react";
import AppContext from '../context';
import { useState } from "react";



function Women({onAddToCart}) {


    const { items, setItems } = React.useContext(AppContext);
    const types = ["Shirts", "Pants", "Kimonos"];


    const [ typeValue, setTypeValue ] = useState('');


    const filterItem = (event) => {
        setTypeValue(event.target.getAttribute("data-value"))

    }





    return ( 
        <div className="d-flex flex-column min-vh-100 justify-content-between">"
        <Header></Header>
        
        <div className="buttons"> 
        <div className="container">
        <div class="btn-group" role="group" aria-label="Basic example">
                

                <button   onClick={() => setTypeValue('')}   type="button" className="btn btn-dark">All</button>
    
                {types.map((item, index) => (
                    <button key={index}  onClick={filterItem} data-value={item}   type="button" className="btn btn-dark">{item}</button>
    
                ))}
         </div>
         </div>
         
         
         
         </div>
         <div className="container ">
                <div className="row justify-content-center">
            
                {items.filter((item) =>  item.type.includes(typeValue)).filter((item) => item.sex.includes("women")).map((item, index) => (
                <Cards onAddToCart={onAddToCart} key={index} {...item}/>

            ))}
            
            
            </div>

            </div>
        
         

       
         



         <Footer></Footer>
         </div>
     );
}

export default Women;