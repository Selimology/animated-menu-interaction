import React, { useState, createContext } from "react"

import "./MenuManager.scss"

export const MenuContext = createContext({
  toggle: false,
  setToggle: () => {},
})

function MenuManager(props) {
  const [toggle, setToggle] = useState(false)

  return (
    <MenuContext.Provider value={{ toggle, setToggle }}>
      {props.children}
    </MenuContext.Provider>
  )
}

export default MenuManager
