import React from 'react'
import {Box, Button} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/icon.png";
import {useDispatch, useSelector} from "react-redux";
import {toggleSidebarButton} from "./sidebarButtonSlice";
import Sidebar from "../../Sidebar/Sidebar";

const HeaderStartBox = () => {
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector((state) => state.sidebarButton.isOpen);

    const handleToggleSidebar = () => {
        dispatch(toggleSidebarButton())
    }

    return (
        <Box
            className="start"
            sx={{
                margin: 0,
                padding: 0,
                border: 0,
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
            }}
        >

            {/*sidebar*/}
            <Button onClick={handleToggleSidebar}>
                <MenuIcon/>
            </Button>

            {/*logo*/}
            <img
                src={logo}
                alt="Logo"
                style={{width: 'auto', height: '50px', display: 'block'}}
            />

            {/* Conditional rendering of sidebar */}
            {isSidebarOpen && <Sidebar/>}
        </Box>
    )
}
export default HeaderStartBox
