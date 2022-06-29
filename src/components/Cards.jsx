
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import AppContext from '../context';






function Cards({ imageUrl, price, name, onAddToCart, onRemove, cardItemId, onAddToFavorite, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const { items, setItems } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(onAddToFavorite);




  const onClickPlus = () => {
    onAddToCart({name, imageUrl, price});
    setIsAdded(!isAdded)
  }

  // const onClickFavorite = () => {
  //   onAddToFavorite({ name, imageUrl, price });
  //   setIsFavorite(!isFavorite);
  // };


  console.log(onAddToCart)
    return (
        <Card style={{ width: '15rem',  }}>
          <Card.Img variant="top" height={220} width={110} src={imageUrl} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {price} RUB
            </Card.Text>
            <Button onClick={onClickPlus}   variant="light">{isAdded ? '-': '+'}</Button>
            {/* <img onClick={onClickFavorite} src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="" /> */}
            
          </Card.Body>
        </Card>
      );
    }

export default Cards;