import React, { useState } from 'react'
const Context=React.createContext()
const Parent = (props) => {
    const [cart,setCart]=useState([])
    const [data,setData]=useState([])
    const [users,setUsers]=useState([])
    const [logged,setlogged]=useState('')
    const [openDraw,setOpenDraw]=useState(false)
    const [filt,setFilt]=useState(false)
    const [filter,setFilter]=useState([])
    const [search,setSearch]=useState('')
    const [featured,setFeatured]=useState([])

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
        featured:[featured,setFeatured]
    }}>
        {props.children}
    </Context.Provider>
  )
}

export {Parent,Context}