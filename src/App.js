import './App.css';
import Header from"./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";

function App() {
  return (
    <div>
          <Header title="MyTodosList" searchBar={false}/> 
          <Todos/>
          <Footer/>


    </div>
       );
}

export default App;
