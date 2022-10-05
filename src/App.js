import './App.css';
import Navbar from "./components/Navbar"
import Journal from "./components/Journal"
import data from "./data"

function App() {
  const journal = data.map(item => {
    return (
      <Journal
        id = {item.id}
        {...item}
      />
    )})
  return (
    <div>
      <Navbar />
      {journal}
    </div>
  );
}

export default App;
