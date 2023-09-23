import { Footer, HomeHeader, SearchInput } from "../components"

const Logo = require('../assets/google-logo.png')


export default function Home(): JSX.Element {
  return (
    <main className="home-container">
      <HomeHeader />
      <main className="home-main">
        <img className="google-logo" src={Logo} alt="Logo" />
        <SearchInput />
        <div className="home-buttons">
          <button className="home-button">
            Google Search
          </button>
          <button className="home-button">
            I'm Feeling Lucky
          </button>
        </div>
      </main>
      <Footer />
    </main>
  )
}