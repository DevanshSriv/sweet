import Card from 'react-bootstrap/Card'
import { Button, Tooltip, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { Context } from './Parent'
const Featured = () => {
    const Cont=useContext(Context)
    useEffect(()=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(resp=>resp.json()).then(res=> Cont.featured[1](res.drinks))
    },[])
    console.log(Cont.featured[0])
  return (
    <div className='home'>
     {Cont.featured[0].map((items)=> <Card style={{ width: '95vw',marginTop:'3%',paddingTop:'2%',paddingBottom:'2%',boxShadow:'2px 2px 5px grey',display:'flex',flexDirection:'row'}}>
      
      <Card.Img variant="top" src={items.strDrinkThumb} style={{width:'30vw'}} id={items.idDrink}/>
      
      <Card.Body style={{width:'18rem'}}>
      <Card.Text>
          <b>Name</b>: {items.strDrink}  
        </Card.Text>
        <Card.Text>
          <b>Category</b>: {items.strCategory}
          <Card.Text>
          <b>Type</b>: {items.strAlcoholic}  
        </Card.Text>  
        </Card.Text>
        <Card.Text> 
          <b> Glass</b>: {items.strGlass}
          <Card.Text> 
          <b>ID</b>: {items.idDrink}
        </Card.Text>
        </Card.Text>
        <Card.Text>
            <b>Description:</b> {items.strInstructions}
        </Card.Text>
      </Card.Body>
    </Card>)}
    </div>
  )
}

export default Featured