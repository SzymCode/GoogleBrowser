export default function Footer(): JSX.Element {
  return (
    <footer className="bg-primary-gray1">
      <div className="location-container">
        <span className="location-header">
          Poland
        </span>
      </div>

      <div className="footer-menu">
        <div className="footer-side">
          {menu.map((menu, index) => (
            <span key={index} className="footer-menu-item">
              {menu}
            </span>
          ))}
        </div>

        <div className="footer-side">
          {settingMenu.map((menu, index) => (
            <span key={index} className="footer-menu-item">
              {menu}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}

const menu = [ "About", "Advertising", "Business", "How Search works" ]
const settingMenu = [ "Privacy", "Terms", "Settings" ]