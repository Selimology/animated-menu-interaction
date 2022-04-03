import React, { useContext } from "react"
import "./MenuContent.scss"
import { Linkedin, GitHub, Twitter } from "react-feather"
import { MenuContext } from "../MenuManager/MenuManager"
import cn from "classnames"

const internalLinks = [
  {
    url: "#1",
    component: <span>Home</span>,
  },
  {
    url: "#2",
    component: <span>About</span>,
  },
  {
    url: "#3",
    component: <span>Work</span>,
  },
  {
    url: "#4",
    component: <span>Contact</span>,
  },
  {
    url: "#4",
    component: <span>Contact</span>,
  },
]

const externalLinks = [
  {
    url: "www.linkedin.com",
    component: <Linkedin />,
  },
  {
    url: "www.github.com",
    component: <GitHub />,
  },
  {
    url: "www.twitter.com",
    component: <Twitter />,
  },
]

function MenuContent() {
  const { toggle } = useContext(MenuContext)

  return (
    <div className="MenuContent">
      <div className={cn("MenuContent__InsideMenu", { toggle })}>
        <div className="MenuContent__InsideMenuContainer">
          <ul className="MenuContent__InternalLinks">
            {internalLinks.map((link) => (
              <li key={"link.url"}>
                <a href="{link.url}">{link.component}</a>
              </li>
            ))}
          </ul>

          <ul className="MenuContent__ExternalLinks">
            {externalLinks.map((link) => (
              <li key={link.url}>
                <a href="{link.url}">{link.component}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MenuContent
