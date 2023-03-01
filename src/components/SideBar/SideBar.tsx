import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa"
import { BsChatDotsFill } from "react-icons/bs"
import { MdContacts } from "react-icons/md"
import { FaRegFileAlt } from "react-icons/fa"
import { AiFillSetting } from "react-icons/ai"
import { FaUserTie } from "react-icons/fa"

import './SideBar.css'

import Option from '../Option/Option'

export default function SideBar() {
    return (
        <div className='side-bar'>
            <div className='options'>
                <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    <Option icon={<FaBars className='icon' />} option='Dashboard'/>
                </NavLink>
                <NavLink to="/chat" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    <Option icon={<BsChatDotsFill className='icon' />} option='Chat Room'/>
                </NavLink>
                <NavLink to="/contacts" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    <Option icon={<MdContacts className='icon' />} option='Contacts'/>
                </NavLink>
                <NavLink to="/reports" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    <Option icon={<FaRegFileAlt className='icon' />} option='Reports'/>
                </NavLink>
                <NavLink to="/admins" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    <Option icon={<FaUserTie className='icon' />} option='Admins'/>
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    <Option icon={<AiFillSetting className='icon' />} option='Settings'/>
                </NavLink>
            </div>
        </div>
    )
}