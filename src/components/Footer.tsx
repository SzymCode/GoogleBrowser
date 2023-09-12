export default function Footer(): JSX.Element {
  return (
    <footer className="bg-black/[0.05]">
      <div className="flex py-[15px] px-[15px] md:px-[30px] border-b border-primary-dark">
        <span className="text-black/[0.6] text-[15px] leading-none">
          Poland
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px] border-b border-primary-dark">
        <div className="flex justify-center">
          {menu.map((menu, index) => (
            <span key={index} className="text-black/[0.7] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]">
              {menu}
            </span>
          ))}
        </div>

        <div className="flex justify-center">
          {settingMenu.map((menu, index) => (
            <span key={index} className="text-black/[0.7] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]">
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