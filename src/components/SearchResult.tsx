import SearchResultHeader from "../components/SearchResultHeader"
import Footer from "./Footer"

export default function SearchResult() {
  return (
    <div className="search-result-container">
      <SearchResultHeader />
      <main className="search-result-main"></main>
      <Footer />
    </div>
  )
}
