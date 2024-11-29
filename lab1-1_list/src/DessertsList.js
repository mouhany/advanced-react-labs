function DessertsList(props) {
  // Implement the component here.  
  return (
    <ul>
      {props.data
        .filter(dessert => dessert.calories <= 500)
        .sort((a, b) => a.calories - b.calories)
        .map((dessert, index) => (<li key={index}>{ dessert.name } - { dessert.calories } cal</li>)
      )}
    </ul>
  )
}

export default DessertsList;
