// using React

let heading = React.createElement(
    "h1",
    {
      id: "title",
      className: "class",
      style: {
        color: "red",
      },
    },
    "Heading1"
  );

  let heading2 = React.createElement(
    "h2",
    {
      id: "title2",
    },
    "Heading2"
  );

  let container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading2]
  );

  console.log(heading); // it will return a object means in react createElement is nothing but object

  let root = ReactDOM.createRoot(document.getElementById("root"));

  // passing the react element inside the root
  root.render(container);