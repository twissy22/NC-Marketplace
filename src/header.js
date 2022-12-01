import React, { useEffect } from "react";

const Header = (props) => {
    const [users, setUsers] = React.useState({});
     useEffect(() => {
        fetch(
        `https://silly-top-coat-foal.cyclic.app/api/users`
      )
        .then((res) => res.json())
        .then((data) => {
         setUsers(data)
        //  console.log(data)
        });
    }, [props.users]);

   
    return (
      <header className="Header">
        <h1>NCbay</h1>

      </header>
    );
  };
  
  export default Header;