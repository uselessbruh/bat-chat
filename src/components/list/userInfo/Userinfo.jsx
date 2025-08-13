import { useState } from "react";
import "./userInfo.css"
import { useUserStore } from "../../../lib/userStore";
import ChatOption from "./chatoption/ChatOption";
import ProfilePicture from "./profilepicture/ProfilePicture";


const Userinfo = () => {

  const { currentUser } = useUserStore();
  const [isChatOption, setIsChatOption] = useState(false);
  const [ isProfileOpen,  setIsProfileOpen] = useState(false);

  const handleToggle=()=>{
    setIsChatOption(prevState => !prevState);
  }

  const handleprofilepicture=()=>{
    setIsProfileOpen(prevState => !prevState)
  }

  return (
    <div className='userInfo'>
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="" onClick={handleprofilepicture}/>
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" onClick={handleToggle}/>
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
      {isChatOption && <ChatOption />}
      {isProfileOpen && <ProfilePicture />}
    </div>
  )
}
 
export default Userinfo;