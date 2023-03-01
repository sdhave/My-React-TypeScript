import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";

export default function Layout() {
  return (
    <>
        <Header />
        <SideBar />
        
        <Outlet />
    </>
  )
};