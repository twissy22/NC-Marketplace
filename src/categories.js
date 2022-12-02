import React from 'react';
import { createContext,useState, useEffect} from 'react';
import axios from 'axios'
export const UserContext = createContext();

export default function Categories({setCategory}) {
const [input, setInput] = useState("")
const categories = axios.create({
  baseURL: 'https://silly-top-coat-foal.cyclic.app/api',
})
useEffect(() => {
  categories.get('/categories').then((res)=>
  setCategory(res.data.categories)
  )
}, [input])

    return ( 
        // <div className='form-container'>
        //     <form className='form' onSubmit={handleSubmit}>
        //         <input type="text" placeholder='search for an item' className='search-field' onChange={handleChange} value={input}/>
        //         <button className='search-btn'>🔍</button>
        //     </form>
        // </div>

<div>


<select value={input}>

  <option value="Household">household</option>

  <option value="Electronics">electronics</option>

  <option value="Clothing">clothing</option>

</select>

</div>

    )
}