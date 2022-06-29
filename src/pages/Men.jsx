import Header from "../components/Header";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import AppContext from '../context';
import React from "react";
import { useState } from "react";
import Pagination from "../components/Pagination";
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';









function Men({ onAddToCart, onRemove, onAddToFavorite, wearPerPage, paginate, currentWear, prevPage, nextPage }) {


    const dispatch = useDispatch();


    const categoryId = useSelector((state) => state.filter.categoryId)
    const onChangeCategory = (id) => {
      dispatch(setCategoryId(id))
    }

    

    const { items, setItems } = React.useContext(AppContext);
    
    const types = ["Shirts", "Pants", "Jackets"];

    




    const [ typeValue, setTypeValue ] = useState('');
    

   
    
    

    const filterItem = (event) => {
        setTypeValue(event.target.getAttribute("data-value"))

    }

   
   
//    const filterItem = (categor) => {
//     const uppDateItem = cloneItems.filter((curElem) => {
       
//         return curElem.type === categor
//     })
//     setTypeValue(uppDateItem)
//    }

      
     



    return ( 
        <div className="d-flex flex-column min-vh-100 justify-content-between">"
        <Header></Header>
        
        
        
        <div className="buttons"> 
        <div className="container">
            <div class="btn-group" role="group" aria-label="Basic example">
                

            <button   onClick={() => setTypeValue('')}   type="button" className="btn btn-dark">All</button>

            {types.map((item, index) => (
                <button key={index}   onClick={filterItem} data-value={item}   type="button" className="btn btn-dark">{item}</button>

            ))}
         </div>
         </div>
         
         
         
         </div>
         <div className="container ">
                <div className="row justify-content-center">
            {currentWear.filter((item) =>  item.type.includes(typeValue)).filter((item) => item.sex.includes("man")).map((item, index) => (
                <Cards  cardItemId={item.id} onRemove={onRemove} onAddToCart={onAddToCart} key={index} {...item}/>

            ))}
           
            
            
            </div>

            <Pagination prevPage={prevPage} nextPage={nextPage} paginate={paginate} wearPerPage={wearPerPage} totalWear={15} ></Pagination>
            </div>
            
            
            
         

       
         



         <Footer></Footer>
         </div>
     );
}

export default Men;