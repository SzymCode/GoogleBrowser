import { TbGridDots } from "react-icons/tb"

const Profile =  require("../assets/szymcode.png")

export default function ProfileIcon() {
  return (
    <div className="profile-container">
      <span className="profile profile-dots">
        <TbGridDots size={20} className="text-primary-dark" />
      </span>
      <span className="profile">
        <img className="profile-img" src={Profile}  alt=""/>
      </span>
    </div>
  )
}