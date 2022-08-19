import { Button, Input } from '@mui/material'
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
const Nav = () => {
   const Cont=useContext(Context)
   const [cat,setCat]=useState([])
   const [fil,setFil]=useState([]) 
   useEffect(()=>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`).then(res=>res.json()).then(ca=> setCat(ca.drinks))
   },[])

   const search=()=>{
    let val=document.getElementById('searchInput').value
    if(val!=''){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${val}`).then(res=>res.json()).then(result=> Cont.data[1](result.drinks))
    }
    else{
        Cont.filter[1]([])
        Cont.filt[1](false)
    }
   }
   const filter=(e)=>{
    let val=e.target.value
    
    if(val!='0'){
        search()
        Cont.filt[1](true)
        let newAr=Cont.data[0].filter((items)=> items.strCategory==val)
        Cont.filter[1](newAr)
    }
    else{
        Cont.filter[1]([])
        Cont.filt[1](false)
    }
   }
  return (
    <div className='nav'>
        
        <div className='logo'>
        <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cosmo-drink-logo-design-template-97b9b22f4c2c0731c93277d90f0edd9b_screen.jpg?ts=1610335122' alt='' width='60vw'/>
        <span><Input placeholder='Search' id='searchInput' onChange={(e)=>{Cont.search[1](e.target.value)}}/><FontAwesomeIcon icon={faSearch} style={{cursor:'pointer'}} onClick={search}/></span>
        </div>
        <div className='Navaccount'>
        <h4 ><AccountCircleIcon sx={{fontSize:'3vw'}}/><span>{Cont.logged[0]==''? 'Guest':Cont.logged[0]}</span></h4>
        <Button variant='contained' color='primary'>Login</Button>
        </div>
        <div className='menuicon'>
        
            <ShoppingBag id='Navbag' sx={{fontSize:'5vw'}}/>
        
            {Cont.drawer[0]==true? <MenuOpenIcon sx={{fontSize:'5vw'}} />:<MenuIcon onClick={()=>{Cont.drawer[1](true)}} sx={{fontSize:'5vw'}}/>}
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
           <Box >
            <select onChange={filter}>
                <option value='0'>Sort BY Category</option>
                {cat.map((items)=> <option value={items.strCategory}>{items.strCategory}</option>)}
            </select>
            <div className='account'>
        <h4 ><AccountCircleIcon sx={{fontSize:'8vw'}}/><span>{Cont.logged[0]==''? 'Guest':Cont.logged[0]}</span></h4>
        <Button variant='contained' color='primary'>Login</Button>
        </div>
        
        
            <ShoppingBag id='shoppingBag' sx={{fontSize:'8vw'}}/>
        
            
        
           </Box>
          </Drawer>
        
    </div>
  )
}

export default Nav