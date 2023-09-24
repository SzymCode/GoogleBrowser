import { Link } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { GoSearch } from "react-icons/go"
import { BsImage } from "react-icons/bs"
import { BiNews } from "react-icons/bi"
import { RiVideoLine } from "react-icons/ri"
import { SlTag } from "react-icons/sl"

import { ProfileIcon, SearchInput } from "../components"
import { Context } from "../utils/ContextApi"

const Logo = require("../assets/google-logo.png")

export const menu = [
    { name: "All", icon: <GoSearch /> },
    { name: "Images", icon: <BsImage size={14} /> },
    { name: "News", icon: <BiNews /> },
    { name: "Videos", icon: <RiVideoLine /> },
    { name: "Shopping", icon: <SlTag size={14} /> }
]


interface MenuItem {
  name: string
  icon: JSX.Element | string
}

export default function SearchResultHeader(): JSX.Element {
  const [selectedMenu, setSelectedMenu] = useState("All")
  const { setImageSearch } = useContext(Context)

  useEffect(() => {
      return () => setImageSearch(false)
  }, [])

  const clickHandler = (menuItem: MenuItem) => {
    let isTypeImage = menuItem.name === "Images"
    setSelectedMenu(menuItem.name)
    setImageSearch(isTypeImage ? true : false)
  }

  return (
    <div className="search-result-header-container">
      <div className="search-result-header-navbar">
        <div className="search-result-left-side">
          <Link to="/">
            <img className="search-result-google-logo" src={Logo} alt="Logo" />
          </Link>
          <SearchInput />
        </div>
        <div className="hidden md:block">
          <ProfileIcon />
        </div>
      </div>

      <div className="search-result-right-side">
        {menu.map((menuItem, index) => (
          <span key={index} className={ `menu-items ${ selectedMenu === menuItem.name ? "text-primary-darker" : "" }` } onClick={() => clickHandler(menuItem)}>
            <span className="menu-item-icon">
              {menuItem.icon}
            </span>
            <span className="menu-item-name">
              {menuItem.name}
            </span>
            {selectedMenu === menuItem.name && (
              <span className="selected-menu-item" />
            )}
          </span>
        ))}
      </div>
    </div>
  )
}