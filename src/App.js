import {useState} from "react";
import {createNewIndex, initialState} from "./constant/constants";
import logo from './logo.svg';
import './App.css';
import Phones from "./Phones";
import CircleSquare from "./components/circle";


function App() {
  const [state, setState] = useState(initialState);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');

  const person = [
    {
      name: 'Vova',
      age: 25,
      hasPhone: true,
      phoneN: '+38097 2297 460'
    }, {
      name: 'Julia',
      age: 24,
      hasPhone: false,
      phoneN: '+38097 488 33 59'
    }, {
      name: 'Sergei',
      age: 30,
      hasPhone: true,
      phoneN: '+38097 2567 450'
    }, {
      name: 'Natalia',
      age: 29,
      hasPhone: true,
      phoneN: '+38097 2767 420'
    }
  ]

  function plusCounter(id) {
    const newState = state.map(el => {
      if (el.id === id) return {...el, value: el.value + 1}
      return el;
    });
    setState(newState);
  }

  function minusCounter(id) {
    const newState = state.map(el => {
      if (el.id === id) return {...el, value: el.value - 2}
      return el;
    });
    setState(newState);
  }

  function setCounter(name) {
    const newState = [...state, {
      id: createNewIndex(),
      value: 0,
      name: name
    }];
    setState(newState);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {
          state.map(el => (
            <div key={el.id}>
              {el.name}
              <button onClick={() => plusCounter(el.id)}>Plus</button>
              <button>{el.value}</button>
              <button onClick={() => minusCounter(el.id)}>Minus</button>
            </div>
          ))
        }

        {visible && <input placeholder={'name counter'} onChange={(e) => setName(e.target.value)}/>}
        <button onClick={() => {
          setVisible(!visible)
          visible && setCounter(name)
        }}>create
        </button>

        <CircleSquare/>

        <Phones person={person}/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
