function GroceryItem({ list }) {
  return (
    <>
      {list.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <h4>
            {item.quantity} {item.unit}
          </h4>
        </div>
      ))}
    </>
  );
}

export default GroceryItem;
