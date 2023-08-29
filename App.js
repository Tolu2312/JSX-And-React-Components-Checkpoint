import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import './App.css'
import Name from './Components/Name';
import Image from './Components/Image';
import Price from './Components/Price';
import Description from './Components/Description';
import Greetings from './Components/Greetings'



function App() {
  const name="David"
  return (
    <div className="app-container">
      <div className='card-container'>
        <Card style={{width: '18rem'}}>
         <Image />
          <Card.Body>
          <Card.Title></Card.Title>
          <Name />
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>
          <Description />
          <Card.Text>Price</Card.Text>
          <Price />

          <Button variant='primary'> Buy </Button>
        </Card.Body>
        
      
        </Card>
      </div>
      
      <Greetings Name={name} />
      
      
      
      
    </div>
  );
}

export default App;
