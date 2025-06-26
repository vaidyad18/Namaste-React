import ReactDOM from "react-dom/client";

//element
const head = <h1>Hello </h1>;

//functional component
const Title = () => {
  return <h1>Hello</h1>;
};
const Heading = () => (
  <div>
    <Title />
    <h1>World</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
