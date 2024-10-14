import React, { useState, MouseEvent } from 'react';
import {Box, Button, InputBase, Menu, MenuItem} from '@mui/material';
import logo from '../../assets/icon.png'; // Adjust the path according to your structure
import MenuIcon from '@mui/icons-material/Menu'; // Make sure this is imported correctly
import { Link } from 'react-router-dom';
import SearchBox from "../../features/SearchBox/SearchBox";

export const Header: React.FC = () => {
    // State to manage the dropdown menu
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    // Function to handle opening the menu
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget); // Set the anchor element for the menu
    };

    // Function to handle closing the menu
    const handleClose = () => {
        setAnchorEl(null); // Close the menu
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
                {/* Dropdown Button with Menu Icon */}
                <Button
                    variant="text"
                    onClick={handleClick}
                >
                    <MenuIcon />
                </Button>

                {/* Dropdown Menu */}
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

                {/* Menu button, YouTube icon */}
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
                {/* Search input, search button, voice search button */}
                <SearchBox/>
            </Box>
            <Box className="end">
                {/* Upload button, notifications, account */}
            </Box>
        </Box>
    );
};
