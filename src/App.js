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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
