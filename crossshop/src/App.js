import React, { useState } from 'react'
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Cart from './Components/Cart/Cart';

function App() {
  const cardArray = [
    {id: 1, name: 'Nike', price: 1200, images: 'https://images.wallpaperscraft.ru/image/single/krossovki_obuv_stil_173533_1920x1080.jpg'},
    {id: 2, name: 'Adidas', price: 1500, images: 'https://images.wallpaperscraft.ru/image/single/krossovki_chelovek_anonim_170473_1920x1080.jpg'},
    {id: 3, name: 'Puma', price: 1300, images: 'https://images.wallpaperscraft.ru/image/single/krossovki_obuv_belyj_118902_1920x1080.jpg'}
  ]
  
  const [cart, setCart] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const onAddToCart = (cartItem) => {
    for(let i = 0; i<cartItems.length; i++){
      if(cartItems[i].id !== cartItem.id){
        
      }else{
        return false
      }
    }
    console.log('ДОБАВИЛИ')
    let arr = (prev => [...prev, cartItem])
    setCartItems(arr)
  }

  const deleteItemCart = (id) => {
    console.log(id)
    let arrDeleteItem = (cartItems) => cartItems.filter((cartItem) => cartItem.id !== id)
    setCartItems(arrDeleteItem)
  }

  const cartOpened = () => {
    setCart(!cart)
  }
  
  return (
    <div className="wrapper">
      <Header cartOpened={cartOpened}/>
      <Content  cardArray={cardArray} 
                onAddToCart={onAddToCart}/>
      {cart && <Cart  cartOpened={cartOpened} 
                      cartItems={cartItems}
                      deleteItemCart={deleteItemCart}/>}
    </div>
  );
}

export default App;
