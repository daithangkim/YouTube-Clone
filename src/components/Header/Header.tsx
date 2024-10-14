import React, { MouseEvent, useState } from 'react';
import { Box, Button, Menu, MenuItem, Tooltip } from '@mui/material';
import logo from '../../assets/icon.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import SearchBox from "../../features/SearchBox/SearchBox";
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                <Button
                    variant="text"
                    onClick={handleClick}
                >
                    <MenuIcon />
                </Button>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} component={Link} to="/">My YouTube</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/subscriptions">Subscriptions</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/discover">Discover</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/more">More on YouTube</MenuItem>
                </Menu>

                <img
                    src={logo}
                    alt="Logo"
                    style={{ width: 'auto', height: '50px', display: 'block' }}
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
                <SearchBox />
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
                    <Button startIcon={<VideoCallOutlinedIcon />} />
                </Tooltip>

                <Tooltip title="Notifications">
                    <Button startIcon={<NotificationsIcon />} />
                </Tooltip>

                <Button startIcon={<AccountCircleIcon />} />
            </Box>
        </Box>
    );
};
