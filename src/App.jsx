import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Cards from './assets/cards';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from './redux/slices/search';


function App() {

  const dispatch = useDispatch()

  const [preparar, setPreparar] = useState('')

  function pesquisar(){
    dispatch(setSearch(preparar))
  }

  return (
    <div className='pagina'>
      <h1 style={{fontSize: '2.5rem'}}>Personagens do Rick And Morty!</h1>
      <Form action="#" method="GET" onSubmit={pesquisar} style={{display: 'flex', gap: '1rem'}}>
        <Form.Control type="text" placeholder="Pesquisar"
        onChange={(event) => setPreparar(event.target.value)}
        />
        <Button type='submit' onClick={pesquisar}>
          Pesquisar!
        </Button>
      </Form>

      <div className='container'>

      <Cards/>

      </div>
    </div>
  )
}

export default App
