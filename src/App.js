import Header from './header'
import Search from './search'
import Items from './items.js'
import './App.css';
import React from 'react';

function App() {
  const [search, setsearch] = React.useState("");
  // const [user, setUser] = React.useState({username: 'Paul-R', avatar_url: 'https://images.prismic.io/northcoders/5ffa1ae0-0e83-47aa-a5f2-d4b6ef24af5a_Paul+R.jpg', kudos: 0});
  return (
    <div className="App">
      <header className="App-header">
<Header />
<Search setsearch={setsearch}/>
<Items search={search}/>

      </header>
    </div>
  );
}

export default App;
