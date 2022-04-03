import React from "react"
import Menu from "../Menu/Menu"
import "./Header.scss"

function Header() {
  return (
    <>
      <div className="header">
        <p className="header__description">Digital Experience Design style</p>
        <Menu />
      </div>
    </>
  )
}

export default Header
