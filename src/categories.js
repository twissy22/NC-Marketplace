import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export default function Categories({ setCategory }) {
  const [categories, setCategories] = useState([]);
  const [input, setInput] = useState("");

  const cat = axios.create({
    baseURL: "https://silly-top-coat-foal.cyclic.app/api",
  });
  useEffect(() => {
    cat.get("/categories").then((res) => setCategories(res.data.categories));
  }, [input]);

  function handleChange(e) {
    console.log(e.target.value);
    setCategory(e.target.value);
  }

  return (
    <div>
      <select value={input} onChange={handleChange}>
        <option value= "Select Category">All Categories</option>
        {categories.map((category) => {
          return <option value={category.category_name}>{category.category_name}</option>;
        })}
      </select>
    </div>
  );
}
