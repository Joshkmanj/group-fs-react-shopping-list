import axios from "axios";

function GroceryItem({ list }) {
  const handleClick = (id) => {
    console.log("What is this", id);
    axios.put(`/list/buy/${id}`);
  };

  return (
    <>
      {list.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <h4>
            {item.quantity} {item.unit}
          </h4>
          <button onClick={() => handleClick(item.id)}>Buy</button>
          <button>Remove</button>
        </div>
      ))}
    </>
  );
}

export default GroceryItem;
