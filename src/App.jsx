
import './App.css'
import Counter from './counter';
import Team from './team';
import Users from './users';

function App() {
  function handleClick(){
    alert('Button clicked');
  }
  

  const addFive = (num) => {
    alert(num + 2);
  }

  return (
    <>
      
      <h3>React core concepts part 2</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=> addFive(3)}>Click me 2</button>
      
      
    </>
  )
}

export default App
