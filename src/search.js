import React from 'react';

export default function Search({setsearch}) {

const [input, setInput] = React.useState("")

  function handleSubmit(e) {
    e.preventDefault()
    setsearch(input);
    setInput("")
  }

  function handleChange(e){
    setInput(e.target.value);
  }

    return (
        <div className='form-container'>
            <form className='form' onSubmit={handleSubmit}>
                <input type="text" placeholder='search for an item' className='search-field' onChange={handleChange} value={input}/>
                <button className='search-btn'>🔍</button>
            </form>
        </div>
    )
}