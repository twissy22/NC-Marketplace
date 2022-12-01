import React from 'react';

export default function Categories({setCategory}) {

const [input, setInput] = React.useState("")

  function handleChange(e){
    console.log(e.target.value)
    setInput(e.target.value);
  }

    return (
        // <div className='form-container'>
        //     <form className='form' onSubmit={handleSubmit}>
        //         <input type="text" placeholder='search for an item' className='search-field' onChange={handleChange} value={input}/>
        //         <button className='search-btn'>🔍</button>
        //     </form>
        // </div>

<div>


<select value={input} onChange={handleChange}>

  <option value="household">Household</option>

  <option value="electronics">Electronics</option>

  <option value="clothing">Clothing</option>

</select>

</div>

    )
}