import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './pages/Home';
import Women from './pages/Women';
import { Routes, Route } from "react-router-dom";
import Men from './pages/Men';
import Cart from './pages/Cart';
import axios from 'axios';
import AppContext from './context';




function App() {

  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [wearPerPage, setWearPerPage] = React.useState(5);




const [cartItems, setCartItems] = React.useState([]);
const [favorites, setFavorites] = React.useState([]);




  React.useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const cartResponse = await axios.get('https://62961a4e810c00c1cb6f3657.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://62961a4e810c00c1cb6f3657.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://62961a4e810c00c1cb6f3657.mockapi.io/items');
      

      // setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
      setLoading(false)
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://62961a4e810c00c1cb6f3657.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev,obj]);
  }


  const onRemove = (id) => {
    axios.delete(`https://62961a4e810c00c1cb6f3657.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id ));
  };

  const onDelete = (obj) => {
    axios.delete(`https://62961a4e810c00c1cb6f3657.mockapi.io/cart/`)
    setCartItems([]);
  };

  const lastCountryIndex = currentPage * wearPerPage;
  const firstWearIndex = lastCountryIndex - wearPerPage;
  const currentWear = items.slice(firstWearIndex, lastCountryIndex);
  const nextPage = () => {
    setCurrentPage(prev => prev +1)
  }
  const prevPage = () => {
    setCurrentPage(prev => prev -1)
  }

  const paginate = pageNumber => setCurrentPage(pageNumber);

  // const onAddToFavorite = async (obj) => {
  //   try {
  //     if (favorites.find((favObj) => favObj.id === obj.id)) {
  //       axios.delete(`/https://62961a4e810c00c1cb6f3657.mockapi.io/favorites/${obj.id}`);
  //     } else {
  //       const { data } = await axios.post('/https://62961a4e810c00c1cb6f3657.mockapi.io/favorites', obj);
  //       setFavorites((prev) => [...prev, data]);
  //     }
  //   } catch (error) {
  //     alert('Не удалось добавить в фавориты');
  //   }
  // };
  





  return (
    <AppContext.Provider value={{items, cartItems}}>
      
    <div className="wrapper">
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Women" element={<Women onAddToCart={onAddToCart} onRemove={onRemove} />} />
      <Route path="/Men" element={<Men nextPage={nextPage} prevPage={prevPage} currentWear={currentWear} wearPerPage={wearPerPage} paginate={paginate} onAddToCart={onAddToCart}  onRemove={onRemove} />} />
      <Route path="/Cart" element={<Cart onAddToCart={onAddToCart} onDelete={onDelete} onRemove={onRemove}/>} />

      </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
