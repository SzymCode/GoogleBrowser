import { ProfileIcon } from "../components"

export default function HomeHeader(): JSX.Element {
  return (
    <header className="home-header-container">
      <div className="home-headers">
        <span className="home-header">
          Gmail
        </span>
        <span className="home-header">
          Images
        </span>
      </div>
      <ProfileIcon/>
    </header>
  )
}
