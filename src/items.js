import { useEffect, useState } from "react";
import Categories from './categories.js'
import axios from 'axios';

const Items = () => {
  const [items, setItems] = useState([]);
  const [category,setCategory] = useState("")

//   useEffect(() => {
//     category ? 
//     fetch(`https://silly-top-coat-foal.cyclic.app/api/Items`)
//       .then((response) => response.json())
//       .then((data) => {
//         setItems(data.items);
//     });
// }, [category]);

const itemss = axios.create({
  baseURL : "https://silly-top-coat-foal.cyclic.app/api",
});
useEffect(() => {
  let path = "/Items"
  if (category) { path += `?category_name=${category}`}
  itemss.get(path).then((res) => setItems(res.data.items))
}, [category]);


// } else if (category ) {
//     useEffect(() => {
//         )
//           .then((response) => response.json())
//           .then((data) => {
//             setItems(data.items);
//         });
//     }, [category]);
// }

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
