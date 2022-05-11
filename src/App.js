import {Routes, Route} from "react-router-dom"
import './App.css';
import Hello from "./components/hello";


function App() {
  return (
    <div className="App">

      {/* <Link to={"/"}>Home</Link>
      <Link to={"/number"}>Number</Link>
      <Link to={"/hello"}>Hello</Link>
      <Link to={"/hello/:color1/:color2"}>Hello Style</Link> */}
      <h1>Routing Practice</h1>
      <Routes>
        <Route path="/" element={<h1>Default</h1>} />
        <Route path="/home" element={<h1>Welcome!</h1>}/>
        <Route path="/:string" element={<Hello/>}/>
        <Route path="/:string/:color1/:color2" element={<h1 style={{color:'blue', backgroundColor:'red'}}>Word is: Hello</h1>}/>
      </Routes>
  </div>

  );
}

export default App;
