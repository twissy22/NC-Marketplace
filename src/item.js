import { useEffect, useState } from "react";

const Item = ({ search }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (search) {
      fetch(`https://silly-top-coat-foal.cyclic.app/api/Items/${search}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.item);
          setItems(data.item);
        });
    }
  }, [search]);

  return (
    <main>
      { items ? 
      <section className="listing">
      <img src= { items.img_url} className="photo"></img>
      <div className = "description">
      <h2> { items.item_name}</h2>
      <h2> { items.price } </h2>
      <h3> { items.description} </h3>
      <button>Add To Cart</button>
      <button>Order Item</button>
      </div>
      </section>
      : null }
    </main>
  )
  }

//   return (
//     <main>
//       <ul>
//         {items
//           ? items.map((item) => {
//               return (
//                 <li>
//                   <h2>{item}</h2>
//                 </li>
//               );
//             })
//           : null}
//       </ul>
//     </main>
//   );
// };
export default Item;
