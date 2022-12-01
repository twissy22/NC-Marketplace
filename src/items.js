

const Items = ({ search }) => {
    const [items, setItems] = useState();
    useEffect(() => {
      if (search) {
        console.log(search + "this is a new search term");
        fetch(`https://silly-top-coat-foal.cyclic.app/api/Items=${search}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setItems(data);
          });
      }
    }, [search]);
    return (
      <main>
        <ul>
          {shows
            ? items.map((item) => {

                return (
                  <li>
                    <h2>{item}</h2>
                  
                  </li>
                );
              })
            : null}
        </ul>
      </main>
    );
            }
            export default Items;