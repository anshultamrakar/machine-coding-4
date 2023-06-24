import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {BsFillRocketFill} from "react-icons/bs"
import {FaRegBookmark} from "react-icons/fa"
import {CgProfile} from "react-icons/cg"

const SideBar = () => {
  return (
    <div className='SideBar'>
        <ul className='sidenav'>
            <li><AiOutlineHome/> Home</li>
            <li><BsFillRocketFill/> Explore</li>
            <li> <FaRegBookmark/>Bookmark</li>
            <li><CgProfile/> Profile</li>
        </ul>
    </div>
  )
}

export default SideBar