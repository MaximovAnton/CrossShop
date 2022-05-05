import React, { useState } from "react";
import "./Content.css";
import Card from "../Card/Card";

const Content = ({cardArray, onAddToCart}) => {
  const [searchValue, setSearchValue] = useState('')
 
  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }
  
  return (
    <div>
        <div className="title">
            <h3>{searchValue ? `Поиск по ассортименту: ${searchValue}` : 'Весь ассортимент'}</h3>
        </div>

        <div className="search" >
          <input type="search" onChange={onChangeSearchInput} maxLength='20' value={searchValue}/>
          {searchValue && <button>Найти</button>}
        </div>

      <div className="content">
        <div className="cardWrap">
          {cardArray.filter(items => items.name.toLowerCase().includes(searchValue.toLowerCase())).map(item => <Card  key={item.id} 
                                        id={item.id}
                                        images={item.images}
                                        name={item.name} 
                                        price={item.price}
                                        onFavourite={() => console.log(item.id, 'Добавили в закладки')}
                                        onPlus={(obj) => console.log(obj)}
                                        onAddToCart={onAddToCart}/>)}
        </div>
      </div>
    </div>
  );
};

export default Content;
