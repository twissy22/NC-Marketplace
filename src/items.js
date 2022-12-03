import { useEffect, useState, useContext} from "react";
import Categories from './categories.js'
import axios from 'axios';
import {UserContext} from './user'


const Items = ({search}) => {
  const user = useContext(UserContext)
  console.log(user.user.username, "HERE")
  const [items, setItems] = useState([]);
  const [category,setCategory] = useState("")

const itemss = axios.create({
  baseURL : "https://silly-top-coat-foal.cyclic.app/api",
});
useEffect(() => {
  let path = "/Items"
  if (category) { path += `?category_name=${category}`}
  if (search){path += `?search=${search}`}
  itemss.get(path).then((res) => 
  setItems(res.data.items))

}, [category,search]);

const handleSubmit= (e)=>{
  let path = `/users/${user.user.username}/orders`
  itemss.post(path, {
    "item_id": +e
  })
  .then((response) => {
    console.log(response.data);
  });
}

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
                      <button onClick={e =>handleSubmit(e.target.value)} value={item.item_id}>Order Item</button>
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
