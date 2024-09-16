//import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const course=["c","c++","JS","React"]
  return (
    <div className="App">
      {/* <header className="App-header">
        TodoList Demo
      </header> */}
      {/* <TodoList/> */}
      <h1>Wise Learnz , madurai</h1>
      <ul>
        {course.map((i)=>(
          <li type="i">{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
