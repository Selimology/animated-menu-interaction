import React from "react"
import ContactButton from "../../component/Contact/ContactButton"
import Header from "../../component/Header/Header"

import "./Home.scss"

function Home() {
  return (
    <>
      <Header />
      <div className="Home">
        <h1>Frontend</h1>
        <ContactButton />
      </div>
    </>
  )
}

export default Home
