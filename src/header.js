import React, { useEffect } from "react";
import Search from "./search";
import Items from "./items.js";
import Item from "./item.js";

const Header = (props) => {
  const [search, setsearch] = React.useState("");
  const [users, setUsers] = React.useState({});
  useEffect(() => {
    fetch(`https://silly-top-coat-foal.cyclic.app/api/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, [props.users]);

  return (
    <header className="Header">
      <h1>NCbay</h1>
      <Search setsearch={setsearch} />
      <Items search={search}/>
    </header>
  );
};

export default Header;
