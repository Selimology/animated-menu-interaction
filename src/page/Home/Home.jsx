import React from "react"
import ContactButton from "../../component/Contact/ContactButton"
import Header from "../../component/Header/Header"
import MenuManager from "../../component/Menu/MenuManager/MenuManager"

import "./Home.scss"

function Home() {
  return (
    <MenuManager>
      <Header />
      <div className="Home">
        <h1>Frontend</h1>
        <ContactButton />
      </div>
    </MenuManager>
  )
}

export default Home
