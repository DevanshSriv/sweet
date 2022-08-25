import { Button, Input, Tooltip } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Drawer from '@mui/material/Drawer';
import { Context } from './Parent';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import './submit.css'
import products from './Data';
import "./table.css"
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';
const Nav = () => {
   const Cont=useContext(Context)
   const [cat,setCat]=useState([])
   const [open,setOpen]=useState(false)
   const [open1,setOpen1]=useState(false)
   const [severity,setSeverity]=useState('')
   const [error,setError]=useState('')
   const [severity1,setSeverity1]=useState('')
   const [error1,setError1]=useState('')
   const [openDraw,setOpenDraw]=useState(false)
   let temp=products
   const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    backgroundImage:'url(https://t4.ftcdn.net/jpg/05/07/96/11/360_F_507961143_x9jmLiEkupgfE2XFuvIz2EtFvBVzGT8J.jpg)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    
  };
  const style1 = {
    position: 'absolute',
    top: '50%',
    left: '70%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    backgroundImage:'url(https://t4.ftcdn.net/jpg/05/07/96/11/360_F_507961143_x9jmLiEkupgfE2XFuvIz2EtFvBVzGT8J.jpg)',
    bgcolor: 'whitesmoke',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    
  };

  
   const nav=useNavigate()
   let count=Cont.cart[0].length
   useEffect(()=>{
    const names = products.map(function (items) {
        return items.type;
    });
var unique = names.filter((v, i, a) => a.indexOf(v) === i);

setCat(unique)
document.getElementById('searchInput').focus()
   },[])
   
   
   
   const search=()=>{
    let val=document.getElementById('searchInput').value
    if(val!=''){
        
        let newAr=products.filter(items=> items.title.toLowerCase().includes(val.toLowerCase()) || items.type.toLowerCase().includes(val.toLowerCase()))
        if(newAr.length==0){
            alert('No Product Found')
            return;
        }
        Cont.data[1](newAr)
        nav('/home')
    }
    else{
      Cont.data[1](products)
        Cont.filt[1](false)
    }
   }
  
   const filter=(e)=>{
    let val=e.target.value
    if(val!='0'){
        Cont.filt[1](true)
        let newAr=products.filter((items)=> items.type==val)
        Cont.data[1](newAr)
        
    }
    else{
        Cont.filt[1](false)
        Cont.data[1](products)
    }
    nav('/home')
   }
      const loginForm=(e)=>{
        e.preventDefault()
        let email=document.getElementById('logE').value
      let pass=document.getElementById('logPass').value
      
      setError1('')
      setSeverity1('')
      e.target.nextSibling.style.display='flex'
      let exists=Cont.users[0].filter(items=> Object.keys(items).toString()==email)
      if(exists.length==0){
        setError1('User does not Exists')
      setSeverity1('error')
      return;
      }
      console.log(exists)
      if(exists[0][email]==pass){
        let user=email.substring(0,email.indexOf('@'))
        Cont.logged[1](user)
        document.getElementsByClassName('btn1')[0].classList.add('btn')
        document.getElementsByClassName('ticks1')[0].setAttribute('id','tick')
        setError1('Congratulations You are Logged IN')
        setSeverity1('success')
        setTimeout(()=>{
          setOpen(false)
        },2000)
       
        
      }else{
        
        setError1('Password Doesnt Match')
        setSeverity1('error')
      }
      }
      const signForm=(e)=>{
        e.preventDefault()
      let email=document.getElementById('signEmail').value
      let pass=document.getElementById('signPass').value
      let Cpass=document.getElementById('cPass').value
      setError('')
      setSeverity('')
       e.target.nextSibling.style.display='flex'
      
      let exists=Cont.users[0].filter(items=> Object.keys(items).toString()==email)
      console.log(exists.length)
      if(pass==Cpass && exists.length==0){
        let user=[...Cont.users[0],{[email]:pass}]
        Cont.users[1](user)
        document.getElementsByClassName('btn2')[0].classList.add('btn')
        document.getElementsByClassName('ticks')[0].setAttribute('id','tick')
        setError('Congratulations You are Registered')
        setSeverity('success')
        setTimeout(()=>{
          setOpen1(false)
        },2000)
      }else{
        
        setError('Password Doesnt Match or User Exists')
        setSeverity('error')
        
      }
     
      }
      useEffect(()=>{
        document.getElementById('searchInput').focus()
        if(Cont.windowU[0].includes('home')==false){
          Cont.data[1](products)
        }
       },[Cont.windowU[0]])

       // deleting prodeuct below

       const removeProd=(e)=>{
         let id=e.target.id
         let temp=Cont.cart[0]
         let newAr=temp.filter(items=> items.id!=id)
         Cont.cart[1](newAr)

       }
       // editing quantity below
       const editQuan=(e)=>{
        let id=e.target.parentElement.id
        if(e.target.id==='-'){
          let newAr=Cont.cart[0].map((items)=> {
            if(items.id==id){
              if(items.quan==1){
                alert('Quantity reached 1')
              }else{
                items.quan-=1
              }
              return items
            }else{
              return items
            }
          })
          Cont.cart[1](newAr)
        }
        else{
          let newAr=Cont.cart[0].map((items)=> {
            if(items.id==id){
              
                items.quan+=1
              
              return items
            }else{
              return items
            }
          })
          Cont.cart[1](newAr)
        }
       }
       // CHECKOUT Function
       const checkout=()=>{
        if(Cont.logged[0]==''){
          setOpen(true)
        }
        else{
          nav('/checkout')
          setOpenDraw(false)
        }
       }
       let bill=0;
       if(Cont.cart[0].length>0){
          Cont.cart[0].map((items)=>{
          bill+=(items.price*items.quan)
        })
       }else{
        bill=0
       }
  return (
    <div className='nav'>
        
        <div className='logo'>
        <img onClick={()=>{nav('/')}} style={{cursor:'pointer'}} src='https://ih1.redbubble.net/image.1689379306.7198/st,small,507x507-pad,600x600,f8f8f8.jpg' alt='' width='90vw'/>
        <span className='seaDiv'><Input placeholder='Search' id='searchInput' onKeyUp={(e)=>{Cont.search[1](e.target.value);if(e.key==='Enter'){search()}}}/><FontAwesomeIcon icon={faSearch} style={{cursor:'pointer'}} onClick={search}/></span>
        <select onChange={filter} className='selCat'>
                <option value='0'>Category</option>
                <option value='0'>All Product</option>
                {cat.map((items)=> <option value={items}>{items}</option>)}
            </select>
        </div>
        
        <div className='Navaccount'>
        <h4 ><AccountCircleIcon sx={{fontSize:'3vw'}}/><span >{Cont.logged[0]==''? 'Guest':Cont.logged[0]}</span></h4>
        {Cont.logged[0]==''? <Button variant='contained' color='primary' onClick={()=>{setOpen(true)}}>Login</Button>:<Button variant='contained' color='error' onClick={()=>{Cont.logged[1]('')}}>Log Out</Button>}
        </div>
        <div className='menuicon'>
        
        <p id='Navbag'><ShoppingBag onClick={()=>{setOpenDraw(true)}} sx={{fontSize:'6vw'}}/><span className='count1'>{count}</span></p>
            
            <div className='menu'>
            {Cont.drawer[0]==true? <MenuOpenIcon sx={{fontSize:'5vw'}} />:<MenuIcon onClick={()=>{Cont.drawer[1](true)}} sx={{fontSize:'5vw'}}/>}
            </div>
            <div id='tabButton' >
            {window.location.href.includes('home')?<Button variant='outlined' onClick={()=>{nav('/')}}>Home</Button>:<Button variant='outlined' onClick={()=>{nav('/home')}}>All</Button>}
            </div>
        </div>
        
        <Drawer
            anchor={'right'}
            open={Cont.drawer[0]}
            onClose={()=>{Cont.drawer[1](false);}}
            PaperProps={{
                sx: {
                  height:'60vh',
                  position:'absolute',
                  top:'25%'
                }
              }}
          >
           <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-evenly' ,height:'100vh'}} >
            <select onChange={filter} className='drawerSelect'>
                <option value='0'>Category</option>
                <option value='0'>All Product</option>
                {cat.map((items)=> <option value={items}>{items}</option>)}
            </select>
            <div className='account'>
        <h4 ><AccountCircleIcon sx={{fontSize:'3vw'}}/><span >{Cont.logged[0]==''? 'Guest':Cont.logged[0]}</span></h4>
        {Cont.logged[0]==''? <Button variant='contained' color='primary' onClick={()=>{setOpen(true)}}>Login</Button>:<Button variant='contained' color='error' onClick={()=>{Cont.logged[1]('')}}>Log Out</Button>}
        </div>
        
        
            <h5 id='shoppingBag'><ShoppingBag onClick={()=>{setOpenDraw(true)}} sx={{fontSize:'60px',position:'absolute',top:'50%'}}/><span className='count'>{count}</span></h5>
            {window.location.href.includes('home')?<Button variant='outlined' onClick={()=>{nav('/')}}>Home</Button>:<Button variant='outlined' onClick={()=>{nav('/home')}}>All</Button>}
            
        
           </Box>
          </Drawer>
          <Modal
        open={open}
        onClose={()=>{setOpen(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
          <Typography variant='h5' component='h5' color='primary'>
            Login
          </Typography>
          <form className='loginForm' onSubmit={loginForm}>
            <Input placeholder='Email' required type='email' id='logE'/>
            <Input placeholder='Password' required type='password' id='logPass'/>
            <Button type='submit' className="btn1"><span>Submit</span><img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" height="70" width="70" alt='' className='ticks1'/></Button>
            <p>Not a Memeber Yet?<span style={{color:'blue',textDecoration: 'underline',cursor:'pointer'}} onClick={()=>{setOpen1(true)}}>Join Now Here!!</span></p>
          </form>
          <Alert sx={{display:'none'}} severity={severity1}>{error1}</Alert>
        </Box>
        
      </Modal>
      <Modal
        open={open1}
        onClose={()=>{setOpen1(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          <Typography variant='h5' component='h5' color='primary'>
            Create Account
          </Typography>
          <form className='signForm' onSubmit={signForm}>
            <Input placeholder='Email' required type='email' id='signEmail'/>
            <Input placeholder='Password' required type='password' id='signPass'/>
            <Input placeholder='Re-Password' required type='password' id='cPass'/>
            <Button type='submit' className="btn2"><span>Submit</span><img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" height="70" width="70" alt='' className='ticks'/></Button>

          </form>
          <Alert sx={{display:'none'}} severity={severity}>{error}</Alert>
        </Box>
        
      </Modal>

      <Drawer
            anchor={'top'}
            open={openDraw}
            onClose={()=>{setOpenDraw(false);}}
            PaperProps={{
              sx: {
                width:'100vw',
                
                backgroundImage:'url(https://cutewallpaper.org/26/invitation-background-hd/1186230538.jpg)',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundAttachment:'fixed',
                textAlign:'center'
              }
            }}
          >
           <>
           <div className='head'><h1>YOUR CART</h1><h2>
            Your Amount: &#8377;{bill} 
            </h2></div>
           <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-evenly' ,height:'100vh',alignItems:'center'}} >
           
            <Button variant='contained' color='error' sx={{position:'absolute',top:'2%',left:'5%'}} onClick={()=>{setOpenDraw(false)}}>&times;</Button>

            {Cont.cart[0].length>0 ? <Button variant='contained'  color='success' sx={{position:'absolute',top:'2%',left:'20%'}} onClick={checkout}><ShoppingCartCheckoutSharpIcon/></Button>:<></>}
            
            {Cont.cart[0].length!=0?<div className='cartTable'>
              <table >
              <tbody>
                <tr >
                  <th >ID</th>
                  <th >Item</th>
                  <th >Name</th>
                  <th >Price</th>
                  <th >Quantity</th>
                  <th >Amount</th>
                  <th >Action</th>
                </tr>
                {Cont.cart[0].map((items)=> <tr>
                  <td>{items.id}</td>
                  <td><img src={items.filename} alt='' width='60vw' height='50vw'/></td>
                  <td>{items.title}</td>
                  <td>&#8377; {items.price}</td>
                  <td id={items.id}><button type='button'className='quanB' id='-' onClick={editQuan}>&#x2212;</button>{items.quan}<button type='button'className='quanB' id='+' onClick={editQuan}>&#43;</button></td>
                  <td>&#8377; {items.price*items.quan}</td>
                  <td><Button variant='contained' color='error' sx={{fontSize:'20px',borderRadius:'20px'}} onClick={removeProd} id={items.id}><DeleteIcon onClick={removeProd} id={items.id}/></Button></td>
                </tr>)}
              </tbody>
            </table>
            </div>:<span style={{backgroundColor:'rgba(0, 0, 0, 0.349)',padding:'0 5%'}}><img className='animate__animated 
            animate__delay-1s animate__lightSpeedInLeft' src='RK.png' alt='' width='130vw'/><h4 style={{color:'white',fontWeight:'bold'}}>YOURE CART IS EMPTY. HAVE SOME DELICIOUSE MITHAIS</h4></span>}
        
           </Box>
           </>
          </Drawer>
    </div>
  )
}

export default Nav