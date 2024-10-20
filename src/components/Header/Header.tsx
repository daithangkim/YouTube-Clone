import React, {useState} from 'react';
import {Box, Button, Tooltip} from '@mui/material';
import SearchBox from "./SearchBox/SearchBox";
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Sidebar from "../Sidebar/Sidebar";
import HeaderStartBox from "./HeaderStartBox/HeaderStartBox";

export const Header: React.FC = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

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

            <HeaderStartBox/>

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
