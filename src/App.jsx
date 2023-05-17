import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Cards from './assets/Cards';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function App() {


  return (
    <div className='pagina'>
      <h1 style={{fontSize: '2.5rem'}}>Personagens do Rick And Morty!</h1>
      <div className='container'>

      <Cards/>

      </div>
    </div>
  )
}

export default App
