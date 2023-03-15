import { useState } from 'react';
import './FoodDelivery.css';

function createInitialTodos() {
  const initialTodos = [];

  return initialTodos;
}


export default function FoodDelivery() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleImagenSeleccionada = (event) => {
    setImagen(URL.createObjectURL(event.target.files[0]));
  }

  const controlarLista = () => {
    setText('');
    setTodos([...todos,
      {
        id: todos.length,
        text: text,
        img: imagen
      }
    ]
  );
  }

  return (
    <div className='caja-main'>    
      <div className='caja-fd'>

        <div className='caja-contenedor-img'>
          <input type="file" onChange={handleImagenSeleccionada} />
        </div>

        <a>Escribe algo...</a>

        <input
          value={text}
          onChange={e => setText(e.target.value)}
        />

        <button className='btn-fd' onClick={controlarLista}>Añadir Post</button>
        
        <ul className='ul-caja'>
        
        {todos.map(item =>(
          <li key={item.id}>
          {item.id+1}.-{item.text}{console.log(item)}
          <img className='imagen' src={imagen} alt="Descripcion de la imagen"/>
          </li>
        ))}

        </ul>
      </div>
    </div>
  );
}