import React, { useContext } from "react"
import { MenuContext } from "../MenuManager/MenuManager"
import "./MenuButton.scss"
import cn from "classnames"
function MenuButton() {
  const { toggle, setToggle } = useContext(MenuContext)

  return (
    //checks if it is opened
    <div className={cn("MenuButton", { toggle })}>
      <button className="MenuButton__button" onClick={() => setToggle(!toggle)}>
        <span></span>
      </button>
    </div>
  )
}

export default MenuButton
