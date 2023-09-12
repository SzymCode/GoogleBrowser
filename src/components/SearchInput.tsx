import * as React from 'react'
import { useState, KeyboardEvent, ChangeEvent } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { useHistory } from "react-router-dom"

const MicIcon = require('../assets/mic.png')
const ImageIcon = require('../assets/image.png')


export default function SearchInput(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const history = useHistory()

  function searchQueryHandler(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && searchQuery.length > 0) {
      history.push(`/${searchQuery}`)
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value)
  }

  return (
    <div id="searchBox" className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-black/[0.1] rounded-3xl hover:bg-white hover:shadow-c hover:border-transparent focus-within:shadow-c focus-within:border-transparent duration-300">
      <AiOutlineSearch size={18} className="text-black/[0.33]" />
      <input
        type="text"
        onChange={handleInputChange}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        className="grow outline-0 text-black/[0.87]"
      />
      <div className="flex gap-3">
        <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="" />
        <img className="h-6 w-6 cursor-pointer" src={ImageIcon} alt="" />
      </div>
    </div>
  )
}