//import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const course=["c","c++","JS","React"]
  return (
    <div className="App">
      <h1>TodoList Demo</h1>
       <TodoList/> 
      
    </div>
  );
}

export default App;
