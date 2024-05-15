import "./category.styles.scss";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      // imageUrl:'https://images.unsplash.com/photo-1593642634000-888888888888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      title: "Jackets",
      // imageUrl:'https://images.unsplash.com/photo-1593642634000-888888888888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      title: "Sneakers",
      // imageUrl:'https://images.unsplash.com/photo-1593642634000-888888888888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 4,
      title: "Women",
      // imageUrl:'https://images.unsplash.com/photo-1593642634000-888888888888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 5,
      title: "Men",
      // imageUrl:'https://images.unsplash.com/photo-1593642634000-888888888888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div key={id} className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
