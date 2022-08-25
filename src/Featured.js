import Card from 'react-bootstrap/Card'
import { Button, Tooltip, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { Context } from './Parent'
import products from './Data';
import Carousel from 'react-bootstrap/Carousel';
import MidCards from './MidCards';
const Featured = () => {
    const Cont=useContext(Context)
    let temp=products
    useEffect(()=>{
      
        document.getElementsByClassName('offers')[0].style.display='block'
        
        
      const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
      let raId=random(1,5)
        let newAr=temp.filter(items=> items.id==raId)
        let raId1=random(6,15)
        let newAr1=temp.filter(items=> items.id==raId1)
        let raId2=random(16,25)
        let newAr2=temp.filter(items=> items.id==raId2)
        let raId3=random(26,31)
        let newAr3=temp.filter(items=> items.id==raId3)
        //.log(products)
        let feature=[newAr[0],newAr1[0],newAr2[0],newAr3[0]]
        Cont.featured[1](feature)
        console.log(feature)
        Cont.windowU[1](window.location.href)
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    },[])
    // console.log(Cont.featured[0])
  return (
    <>
     
    <div className='feature'>
    <h1 style={{marginTop:'5%',color:'white',fontWeight:'bolder'}}><span><img src='https://media0.giphy.com/media/chszmRYxiOT9iJUsXR/giphy.gif?cid=6c09b9521xgnpn3bwsi3xedq557m1m7w42agpqpwx15o0zib&rid=giphy.gif&ct=s' alt='' width='80vw'/></span>TODAY SPECIALS</h1>
      <Carousel style={{padding:'0',margin:'0'}} variant='dark'>
     {Cont.featured[0].map((items)=> <Carousel.Item>

 <Card style={{ width: '95vw',marginTop:'3%',paddingTop:'2%',paddingBottom:'2%',boxShadow:'2px 2px 5px grey',display:'flex',flexDirection:'row',backgroundImage:' url(https://mcdn.wallpapersafari.com/medium/13/40/FSyet6.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'60vh'}} className='featureCard'>
      
      <Card.Img variant="top" src={items.filename} style={{width:'30vw',height:'50vh'}} id={items.id}/>
      
       <Card.Body style={{width:'18rem'}}>
       <Card.Text>
           <b>Name</b>: {items.title}  
         </Card.Text>
        <Card.Text>
         <b>Type</b>: {items.type}
          <Card.Text>
          <b>Height</b>: {items.height}  
        </Card.Text> 
        <Card.Text>
         <b>Width</b>: {items.width}  
        </Card.Text>  
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
     </Carousel.Item>)}
     </Carousel>
    </div>
    <MidCards/>
    </>
  )
}

export default Featured
// 