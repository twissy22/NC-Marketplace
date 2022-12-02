import React from 'react';
import { createContext,useState, useEffect} from 'react';
import axios from 'axios'
export const UserContext = createContext();

export default function Categories({setCategory}) {
const [categories, setCategories] = useState([])
const [input, setInput] = useState("")

const cat = axios.create({
  baseURL: 'https://silly-top-coat-foal.cyclic.app/api',
})
useEffect(() => {
  cat.get('/categories').then((res)=>
  setCategories(res.data.categories)
  )
}, [input])

    return ( 
<div>

<select value={input}>
{categories.map((category)=>{
return( 
  <option value="category">{category.category_name}</option>
)
})
}
</select>

</div>

    )
}