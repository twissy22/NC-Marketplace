import { useEffect, useState } from "react";
import Categories from './categories.js'
import axios from 'axios';

const Items = () => {
  const [items, setItems] = useState([]);
  const [category,setCategory] = useState("")
  useEffect(() => {
    fetch(`https://silly-top-coat-foal.cyclic.app/api/Items`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data.items);
      });
  }, [category]);

  return (
  
    <main>
      <Categories setCategory={setCategory}/>
      <ul>
        {items
          ? items.map((item) => {
              return (
                <li>
                  <section className="listing">
                    <img src={item.img_url} className="photo"></img>
                    <div className="description">
                      <h2> {item.item_name}</h2>
                      <h2> {item.price} </h2>
                      <h3> {item.description} </h3>
                      <button>Add To Cart</button>
                      <button>Order Item</button>
                    </div>
                  </section>
                </li>
              );
            })
          : null}
      </ul>
    </main>
  );
};
export default Items;
