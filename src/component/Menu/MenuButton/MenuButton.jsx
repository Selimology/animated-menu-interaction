import React, { useContext } from "react"
import { MenuContext } from "../MenuManager/MenuManager"
import "./MenuButton.scss"

function MenuButton() {
  const { toggle, setToggle } = useContext(MenuContext)

  return (
    <div className="MenuButton">
      <button className="MenuButton__button" onClick={() => setToggle(!toggle)}>
        <span></span>
      </button>
    </div>
  )
}

export default MenuButton
