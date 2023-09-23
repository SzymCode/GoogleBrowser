import { useState, KeyboardEvent } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import { useHistory, useParams } from "react-router-dom"

const MicIcon = require("../assets/mic.png")
const ImageIcon = require("../assets/image.png")


export default function SearchInput() {
  const { query } = useParams<{ query: string }>()
  const [searchQuery, setSearchQuery] = useState<string>(query || "")
  const history = useHistory()

  const searchQueryHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event?.key === "Enter" && searchQuery?.length > 0) {
      history.push(`/${searchQuery}/`)
    }
  }
  return (
    <div id="searchBox" className="search-box">
      <AiOutlineSearch size={18} className="text-primary-dark1" />
      <input type="text" className="search-input" onChange={(e) => setSearchQuery(e.target.value)} onKeyUp={searchQueryHandler} value={searchQuery} autoFocus />
      <div className="input-icons-container">
        {searchQuery && (
          <IoMdClose size={24} className="input-close-icon" onClick={() => setSearchQuery("")} />
        )}
        <img className="input-icon" src={MicIcon} alt="" />
        <img className="input-icon" src={ImageIcon} alt="" />
      </div>
    </div>
  )
}