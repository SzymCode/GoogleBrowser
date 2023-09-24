import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"

import { fetchDataFromApi } from "../utils/api"
import { Footer, SearchedImageTemplate, SearchedItemTemplate, SearchResultHeader } from "../components"
import { Context } from "../utils/ContextApi"

export default function SearchResult() {
  interface SearchResultData {
    items: any[]
    queries: any[]
    searchInformation: any
  }

  const [result, setResult] = useState<SearchResultData | undefined>()
  const { query, startIndex } = useParams<{ query: string; startIndex: string }>()
  const { imageSearch } = useContext(Context)

  useEffect(() => {
    fetchSearchResults()
    window.scrollTo(0, 0)
  }, [query, startIndex, imageSearch])

  function fetchSearchResults() {
    let payload: { q: string; start: string; searchType?: string } = {
      q: query,
      start: startIndex
    }
    if (imageSearch) {
      payload.searchType = "image"
    }
    fetchDataFromApi(payload).then((res: SearchResultData) => {
      console.log(res)
      setResult(res)
    })
  }

  if (!result) return null

  const { items, searchInformation } = result

  return (
    <div className="flex flex-col min-h-[100vh]">
      <SearchResultHeader />
      <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
        <div className="flex text-sm text-[#70757a] mb-3">
          { `About ${ searchInformation.formattedTotalResults } results in (${ searchInformation.formattedSearchTime })` }
        </div>
        {!imageSearch ? (
          <>
            {items.map((item, index) => (
              <SearchedItemTemplate key={index} data={item} />
            ))}
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
            {items.map((item, index) => (
              <SearchedImageTemplate key={index} data={item} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}