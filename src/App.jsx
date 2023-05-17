import { useState } from 'react'
import './App.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const data = [
    {
      nome: 'Pikachu',
      descricao: 'Pikachu is a short, chubby rodent Pokémon. It is covered in yellow fur with two horizontal brown stripes on its back. It has a small mouth, long',
      imagem: 'https://media.seudinheiro.com/cdn-cgi/image/fit=contain,width=715&,format=auto/uploads/2021/01/Pokémon-628x353.png'
    },
    {
      nome: 'Pikachu',
      descricao: 'Pikachu is a short, chubby rodent Pokémon. It is covered in yellow fur with two horizontal brown stripes on its back. It has a small mouth, long',
      imagem: 'https://media.seudinheiro.com/cdn-cgi/image/fit=contain,width=715&,format=auto/uploads/2021/01/Pokémon-628x353.png'
    },
    
  ]



  return (
    <div className='pagina'>
      <h1 style={{ fontSize: '2.5rem' }}>Pokedex com Objeto e Map</h1>

      <div className='container'>

        {data.map((objeto) => {
          console.log(objeto.nome)
          return (
            <Card style={{ width: '25%' }}>
              <Card.Img src={objeto.imagem} style={{ height: '10rem' }} variant="top" />
              <Card.Body>
                <Card.Title>{objeto.nome}</Card.Title>
                <Card.Text>
                  {objeto.descricao}
                </Card.Text>
              </Card.Body>
            </Card>
          )
        })
        }

      </div>
    </div>
  )
}

export default App
