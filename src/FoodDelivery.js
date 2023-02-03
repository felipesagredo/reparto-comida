import { useState } from 'react';
import './FoodDelivery.css';

function createInitialTodos() {
  const initialTodos = [];

  /*for (let i = 0; i < 10; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' + (i + 1)
    });
  }*/
  return initialTodos;
}

export default function FoodDelivery() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState('');

  return (
    <div className='caja-fd'>
      <a>Ingresa tus compras</a>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className='btn-fd' onClick={() => {
        setText('');
        setTodos([...todos,
            {
              id: todos.length,
              text: text
            }
          ]
        );
      }}>Agregar producto</button>
      <ul>
        {todos.map(item =>(
          <li key={item.id}>{item.text}{console.log(item)}</li>
        ))}
      </ul>
    </div>
  );
}