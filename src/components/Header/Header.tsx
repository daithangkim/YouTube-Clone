import React, {useState} from 'react';
import {Box, Button, Tooltip} from '@mui/material';
import logo from '../../assets/icon.png';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBox from "../../features/SearchBox/SearchBox";
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Sidebar from "../Sidebar/Sidebar";

export const Header: React.FC = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const toggleIsSideBarOpen = () => setIsSideBarOpen(!isSideBarOpen);

    return (
        <Box
            className="header"
            sx={{
                height: 56,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            {isSideBarOpen && <Sidebar/>}

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
                <Button
                    variant="text"
                    onClick={toggleIsSideBarOpen}
                >
                    <MenuIcon/>
                </Button>

                {/*logo*/}
                <img
                    src={logo}
                    alt="Logo"
                    style={{width: 'auto', height: '50px', display: 'block'}}
                />
            </Box>

            <Box
                className="center"
                sx={{
                    flex: "0 1 732px",
                    minWidth: 0,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <SearchBox/>
            </Box>

            <Box
                className="end"
                sx={{
                    minWidth: '225px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    overflow: 'hidden',
                    padding: 0,
                }}
            >
                <Tooltip title="Create Video">
                    <Button startIcon={<VideoCallOutlinedIcon/>}/>
                </Tooltip>

                <Tooltip title="Notifications">
                    <Button startIcon={<NotificationsIcon/>}/>
                </Tooltip>

                <Button startIcon={<AccountCircleIcon/>}/>
            </Box>
        </Box>
    );
};
