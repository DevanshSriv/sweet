import { Button, Tooltip } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { Context } from './Parent'
const Page = () => {
    const Cont=useContext(Context)
    useEffect(()=>{
        if(Cont.data[0].length<=10){
            document.getElementById('next').disabled=true
        }else{
            document.getElementById('next').disabled=false
        }
        
    },[Cont.data[0]])
    const prev=()=>{
        
        let starter=Cont.start[0]
        let ender=Cont.end[0]
        if(starter>=10){
            starter-=10
            ender-=10
            document.getElementById('to_top').click()
        }
        Cont.start[1](starter)
        Cont.end[1](ender)
    }
    const next=()=>{
        let starter=Cont.start[0]
        let ender=Cont.end[0]
        if(starter<40){
            starter+=10
            ender+=10
            document.getElementById('to_top').click()
        }
        Cont.start[1](starter)
        Cont.end[1](ender)
    }
  return (
    <div className='page'>
    <Button variant='contained' onClick={prev}>Prev{'<<'}</Button>
    <Button variant='contained' >Page: {Cont.start[0]/10}</Button>
    <Button variant='contained'  onClick={next} id='next'>Next{'>>'}</Button>
       
    </div>
  )
}

export default Page