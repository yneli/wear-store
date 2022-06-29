import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';






function CartCards({imageUrl, price, name, onAddToCart, onRemove, cardItemsId, counterItems}) {
  const [isAdded, setIsAdded] = React.useState(false);






  const onClickPlus = () => {
    onAddToCart({name, imageUrl, price});
    setIsAdded(!isAdded)
  }


  
    return (
        <>
        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" height={220} width={100} src={imageUrl} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {price} RUB
            </Card.Text>
            <Button onClick={onClickPlus}  variant="dark">x{counterItems}</Button>
            <Button onClick={() => onRemove(cardItemsId)} className="rm-4px" variant="dark">Remove</Button>
            
          </Card.Body>
          
        </Card>
        
        </>
      );
    }

export default CartCards;