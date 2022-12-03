import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export default function Orders({ }) {
  const [orders, setOrders] = useState([]);

  const cat = axios.create({
    baseURL: "https://silly-top-coat-foal.cyclic.app/api",
  });
  useEffect(() => {
    cat.get("/users/Paul-C/orders").then((res) => setOrders(res.data.items))
  }, [setOrders]);


    return(
       <ul>
      {orders
        ? orders.map((order) => {
            return (
              <li>
                <section className="orders">
                  <img src={order.img_url} className="photo"></img>
                  <div className="description">
                    <h2> {order.item_name}</h2>
                    <h2> {order.price} </h2>
                    <h3> {order.description} </h3>
                  </div>
                </section>
              </li>
            );
          })
        : null}
    </ul>
   
    ) 
    
 
}
// /api/users/:username/orders