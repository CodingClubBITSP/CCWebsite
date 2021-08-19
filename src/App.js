import "./App.css";
import Home from "./Containers/Home/Home";
import OurTeam from "./Containers/OurTeam/OurTeam";
import Login from "./Components/Login/Login"
import Departments from "./Containers/Departments/Departments"
import Blog from "./Components/Blogcards/Blogcard"
function App() {
  return (
    <div className="App">
      <Home />
      <OurTeam />
      <Departments />
      <Blog />
      <Login />

    </div>
  );
}
export default App;
