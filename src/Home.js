import { Alert, Button, Tooltip, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from './Parent';
import Card from 'react-bootstrap/Card'
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Page from './Page';
import products from './Data'
import { SettingsRemoteOutlined } from '@mui/icons-material';
const Home = () => {
  
   
  window.onscroll=()=>{
    if(document.body.scrollTop>1000||document.documentElement.scrollTop>1000){
      document.getElementById('to_top').style.display='block'
    }
    else{
      document.getElementById('to_top').style.display='none'
    }
  }
    const [preImage,setPreImage]=useState('')
    const [single,setSingle]=useState([])
    const cont=useContext(Context)
    //.log(cont.data[0])
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50vw',
        height:'40vw',
        bgcolor: 'white',
        textAlign:'center'
      };
      const style1 = {
        position: 'absolute',
        top: '50%',
        left: '40%',
        transform: 'translate(-50%, -50%)',
        width: '50vw',
        bgcolor: 'white',
        boxShadow: 24,
        p: 4,
      };
      useEffect(()=>{
        document.getElementsByClassName('offers')[0].style.display='none'
        document.getElementsByClassName('page')[0].style.display='flex'
        cont.windowU[1](window.location.href)
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
      },[])
    
 
    //.log(cont.data[0])
    const preview=(e)=>{
     setPreImage(e.target.src)
     setOpen(true)
     
    }
    const details=(e)=>{
      
      let id=e.target.id
      let detailItem=cont.data[0].filter(items=> items.id==id)
      setSingle(detailItem)
      setOpen1(true)
    }
    const addCart=(e)=>{
     let selId=e.target.id
     let exists=cont.cart[0].filter(items=> items.id==selId)
     if(exists.length==0){
      let sel=cont.data[0].filter(items=> items.id==selId)
      sel[0]['quan']=1
      let newAr=[...cont.cart[0],sel[0]]
      cont.cart[1](newAr)
     }else{
      // exists.quan+=1
      let newA=cont.cart[0].map((items)=> {
       
        
        if(items.id==selId){
          items.quan+=1
          return items
        }
        else{return items}
      })
      // console.log(newA)
      cont.cart[1](newA)
     }
    }
    console.log(cont.cart[0])
    
  return (
    <>
    <div className='home'>
       {cont.data[0].slice(cont.start[0],cont.end[0]).map((items)=> <Card style={{ width: '20rem',marginTop:'3%',alignItems:'center' ,paddingTop:'2%',paddingBottom:'2%',boxShadow:'9px 9px 9px black',backgroundImage:' radial-gradient(#F8F8F8,gold)',transition:'all 0.5s ease-in'}}>
      <Tooltip arrow title={<h5>Double Click To preview</h5>}>
      <Card.Img variant="top" src={items.filename} style={{width:'20vw',height:'20vw'}} id={items.id} onDoubleClick={preview}/>
      </Tooltip>
      <Card.Body style={{width:'18rem'}}>
      <Card.Text>
          <b>Name</b>: {items.title}  
        </Card.Text>
        <Card.Text>
          <b>Type</b>: {items.type}
          <Card.Text style={{fontFamily:'Vardana'}}>
            <b>Price</b>: {items.price}
          </Card.Text>
        </Card.Text>
        <Card.Text> 
          <b> Ratings</b>: {items.rating}
          <Card.Text> 
          <b>ID</b>: {items.id}
        </Card.Text>
        </Card.Text>
        
        <Button variant="outlined" sx={{marginX:'1%'}} id={items.id} onClick={details}>Details</Button>
        <Button variant="contained" color='warning' id={items.id}  onClick={addCart}>Add to Cart</Button>
        
      </Card.Body>
    </Card>)}
    <Modal
        open={open}
        onClose={()=>{setOpen(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
       <div style={style}>
          <img src={preImage} alt='' width='100%'/>
          </div>
      </Modal>
      
        
      
        <Tooltip title={<p>Go to Top</p>} ><Button id='to_top'  sx={{position:'fixed',top:'60%',right:'5%',borderRadius:'50%'}} variant='contained' onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}><KeyboardDoubleArrowUpIcon sx={{fontSize:'40px'}}/></Button>
        </Tooltip>
        <Modal
        open={open1}
        onClose={()=>{setOpen1(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style1}>
          {single.map((items)=> <Card style={{ width: '70vw',marginTop:'3%',paddingTop:'2%',paddingBottom:'2%',boxShadow:'2px 2px 5px grey',display:'flex',flexDirection:'row'}} className='featureCard1'>
      
      <Card.Img variant="top" src={items.filename} style={{width:'30vw',height:'50vh'}} id={items.id}/>
      
       <Card.Body style={{width:'18rem'}}>
       <Card.Text>
           <b>Name</b>: {items.title}  
         </Card.Text>
        <Card.Text>
         <b>Type</b>: {items.type}
            
        </Card.Text>
        <Card.Text> 
          <b> Ratings</b>: {items.rating}
          <Card.Text> 
          <b>ID</b>: {items.id}
        </Card.Text>
         </Card.Text>
         <Card.Text>
             <b>Description:</b> {items.description}
         </Card.Text>
       </Card.Body>
     </Card>
     )}
     </div>   
      </Modal>
          
    </div>
    <Page/>
    </>
  )
}

export default Home