import { Button, Input } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from './Parent'
import './checkout.css'
const Checkout = () => {
    const cont=useContext(Context)
    const [mobile,setMobile]=useState('')
    useEffect(()=>{
        document.getElementsByClassName('offers')[0].style.display='none'
      },[])

      //form handle

      const form=(e)=>{
         e.preventDefault()
         document.getElementById('Checkout_Form').innerHTML=`<h1>Congratulations Order Placed Successfully</h1>`
         cont.cart[1]([])
      }
      
  return (
    <div className='checkout'>
        
        <form className='Checkout_Form' id='Checkout_Form' onSubmit={form}>
        <h1>Delivery Details</h1>
            <Input placeholder='Address' type='text' required/>
            <Input placeholder='Mobile' type='text' maxLength={10} minLength={10} value={mobile} required onChange={(e)=>{if(isNaN(e.target.value)|| e.target.value.length==11){return}else{setMobile(e.target.value)}}}/>
            <Input placeholder='City' type='text' required/>
            <Input placeholder='ZipCode' type='text' maxLength={6} minLength={6} required/>
            <Button variant='contained' color='success' type='submit'>Place Order</Button>
        </form>
    </div>
  )
}

export default Checkout