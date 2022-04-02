import React from "react"
import "./Contact.scss"
import { Plus } from "react-feather"
function ContactButton() {
  return (
    <>
      <button className="ContactButton__button">
        <span>Resume</span>
        <Plus />
      </button>
    </>
  )
}

export default ContactButton
