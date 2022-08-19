import { Button, Tooltip, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from './Parent';
import Card from 'react-bootstrap/Card'
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
const Home = () => {
    const [preImage,setPreImage]=useState('')
    const cont=useContext(Context)
    const [open, setOpen] = useState(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40vw',
        height:'40vh',
        bgcolor: 'background.paper',
        textAlign:'center'
      };
    useEffect(()=>{
     if(cont.filt[0]==false){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`).then(json1=> json1.json()).then(data=> cont.data[1](data.drinks))
     }   

        
	
    },[cont.filt[0]])
    useEffect(()=>{
        if(cont.search[0]==''){
           fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`).then(json1=> json1.json()).then(data=> cont.data[1](data.drinks))
        }   
   
           
       
       },[cont.search[0]])
    console.log(cont.data[0])
    const preview=(e)=>{
     setPreImage(e.target.src)
     setOpen(true)
     
    }
  return (
    <div className='home'>
       {cont.filter[0].length==0? cont.data[0].map((items)=> <Card style={{ width: '20rem',marginTop:'3%',alignItems:'center' ,paddingTop:'2%',paddingBottom:'2%',boxShadow:'2px 2px 5px grey'}}>
      <Tooltip arrow title={<h5>Double Click To preview</h5>}>
      <Card.Img variant="top" src={items.strDrinkThumb} style={{width:'20vw'}} id={items.idDrink} onDoubleClick={preview}/>
      </Tooltip>
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
        
        <Button variant="outlined" sx={{marginX:'1%'}}>Details</Button>
        <Button variant="contained" color='warning'>Add to Cart</Button>
      </Card.Body>
    </Card>):cont.filter[0].map((items)=> <Card style={{ width: '20rem',marginTop:'3%',alignItems:'center' ,paddingTop:'2%',paddingBottom:'2%',boxShadow:'2px 2px 5px grey'}}>
      <Card.Img variant="top" src={items.strDrinkThumb} style={{width:'20vw'}} />
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
        
        <Button variant="outlined" sx={{marginX:'1%'}}>Details</Button>
        <Button variant="contained" color='warning'>Add to Cart</Button>
      </Card.Body>
    </Card>)}
    <Modal
        open={open}
        onClose={()=>{setOpen(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={preImage} alt='' width='60%'/>
        </Box>
      </Modal>
    </div>
  )
}

export default Home