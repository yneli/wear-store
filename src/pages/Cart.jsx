
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import Footer from "../components/Footer";
import CartCards from "../components/CartCards";
import AppContext from '../context';
import React from "react";



function Cart({ onRemove, onDelete, onAddToCart }) {

    const { cartItems, setCartItems } = React.useContext(AppContext);
    const { cartCounter, setCartCounter } = React.useState();
    

    const funFilter = (arr) => {
        const obj = {};
        const res = arr.filter(({name}) =>(!obj[name] && (obj[name] = 1)));
        return res
      }

      let newArr = funFilter(cartItems);

    const funPrice = (arr) => {

        let arrPrice = [] 
        
        for(let i = 0; i < arr.length; i++){
          if ( arr[i].price ){
            arrPrice.push(arr[i].price)
          }
        }
      
        let result = arrPrice.reduce(function(sum, elem) {
          return sum + elem;
        }, 0);
      
        return result.toFixed(3)
        
      }
    

      const funCounter = (arr, objName) => {

        let counter = 0;
      
        for(let i = 0; i < arr.length; i++){
          if(arr[i].name === objName){
            counter++
          }
        }
      
        return counter
      }



    return ( 

        
        <div className="d-flex flex-column min-vh-100 justify-content-between">"
            <div className="wrapper flex-grow-1">
            <Navbar collapseOnSelect fixed="top" bg="light" variant="light">
    <Container>
    <Navbar.Brand href="/"><img src="./img/Logo.png" alt="" /></Navbar.Brand>
    <Nav className="me-auto"> 
    </Nav>
    <Nav>
    <Nav.Link href="#cart">CART</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
           
           
            </div>

            
            <div className="container">
                <div className="row">
                {newArr.map((item, index) => (
                <CartCards onAddToCart={onAddToCart} counterItems={funCounter(cartItems,item.name)}  cardItemsId={item.id} onRemove={onRemove} key={item.id} {...item}/>

            ))}
           
           <Button  onClick={onDelete}
             className="rm-4px" variant="dark">Remove All</Button>
           <button type="button" class="btn btn-outline-secondary">Total price: {funPrice(cartItems)} RUB</button>
            
            </div>
            

            
            </div>

            
            
 
            <Footer ></Footer>
        </div>
  

     );
}

export default Cart;