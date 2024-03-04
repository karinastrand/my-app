import img from "./image/CupCake2.png";
import './App.css';
import  Header from "./Components/Header.js"
import MenuItems from "./Components/MenuItems.js";

// const Header=()=>{return (<h1>This text comes from Header Component</h1>);}

function App() {
  const name="Jane";
  const x= false;
  return (
    <div className="App">
      <MenuItems />
      <h1>Hello React!</h1>
      <h2>Hello {name}</h2>
      <h2>{x?'yes':'No'}</h2>
      <img src={img}></img> 
      <Header />
    </div>
  );
}

export default App;
