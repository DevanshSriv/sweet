import React, { useState } from 'react'
import products from './Data'
const Context=React.createContext()
const Parent = (props) => {
    const [cart,setCart]=useState([])
    const [data,setData]=useState(products)
    const [users,setUsers]=useState([])
    const [logged,setlogged]=useState('')
    const [openDraw,setOpenDraw]=useState(false)
    const [filt,setFilt]=useState(false)
    const [filter,setFilter]=useState([])
    const [search,setSearch]=useState('')
    const [featured,setFeatured]=useState([])
    const [windowurl,setWindowUrl]=useState('')
    const [beg,setBeg]=useState(0)
    const [end,setEnd]=useState(10)
    const [cardFilter,setCardFilter]=useState('')
    const [openConf,setOpenConf]=useState(false)
  return (
    <Context.Provider value={{
        cart:[cart,setCart],
        data:[data,setData],
        users:[users,setUsers],
        logged:[logged,setlogged],
        drawer:[openDraw,setOpenDraw],
        filt:[filt,setFilt],
        filter:[filter,setFilter],
        search:[search,setSearch],
        featured:[featured,setFeatured],
        start:[beg,setBeg],
        end:[end,setEnd],
        cardFilter:[cardFilter,setCardFilter],
        windowU:[windowurl,setWindowUrl],
        openConf:[openConf,setOpenConf]
    }}>
        {props.children}
    </Context.Provider>
  )
}

export {Parent,Context}