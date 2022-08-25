import React, { useContext, useEffect, useState } from 'react'
import { Context } from './Parent'
import './mid.css'
import { Tooltip } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import products from './Data'
const MidCards = () => {
    const Cont=useContext(Context)
    const [cat,setCat]=useState([])
    const nav=useNavigate()
    let temp=products
    useEffect(()=>{
        const names = temp.map(function (items) {
            return items.type;
        });
    var unique = names.filter((v, i, a) => a.indexOf(v) === i);
    
    setCat(unique)
       },[])

    const cardSel=(e)=>{
        let val=e.target.id
       
        if(val!='0'){
            Cont.filt[1](true)
            let newAr=temp.filter((items)=> items.type==val)
            Cont.data[1](newAr)
            nav('/home')
        }
        else{
            Cont.data[1]([])
            Cont.filt[1](false)
        }
    }
  return (
    <div className='midCard'>
        {/* <div className='haha'><img src='kri.png' className='kri animate__animated animate__bounce animate__slow animate__infinite' alt=''/><div className='speech-bubble'><h1>Laddoo Khaoge!!!</h1></div></div> */}
        <div className='box'>
            <img src="kri.png" className='animate__animated animate__bounce animate__slow animate__infinite' alt="" />
            <h2 className='animate__animated animate__fadeIn animate__delay-2s animate__slow animate__infinite' >Ladoo Khaoge!!!</h2>
        </div>
        {cat.map((items)=> <div className='Midcard' style={{backgroundColor:'transparent',border:'none'}}>

            <div className='img'>
                <Tooltip arrow title={<p>{items}</p>}><img src={temp.filter(item=> item.type==items)[0].filename} alt='' width='100vw' height='100vw' id={items} onClick={cardSel}/></Tooltip>
            </div>
        </div>)}
    </div>
  )
}

export default MidCards