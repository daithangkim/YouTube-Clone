import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Drawer } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import TheatersIcon from "@mui/icons-material/Theaters";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {toggleSidebarButton} from "../Header/HeaderStartBox/sidebarButtonSlice";

const Sidebar = () => {
    const dispatch = useDispatch();
    const open = useSelector((state) => state.sidebarButton.isOpen); // Get the state from Redux

    const handleDrawerOnClose = () => {
        dispatch(toggleSidebarButton()); // Dispatch the toggle action
    };

    return (
        <div>
            <Drawer
                anchor="left"
                open={open}
                onClose={handleDrawerOnClose}  outside
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={handleDrawerOnClose}
                    onKeyDown={handleDrawerOnClose}
                >
                    <List>
                        {['Home', 'Shorts', 'Subscriptions'].map((text) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {text === 'Home' ? <HomeIcon /> : text === 'Shorts' ? <TheatersIcon /> : <SubscriptionsIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Divider />

                    {/* Channel Related List */}
                    <List>
                        {['Your Channel', 'History', 'Playlists', 'Your Videos', 'Watch Later', 'Liked Videos'].map((text) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {text === 'Your Channel' ? <AccountCircleIcon /> :
                                            text === 'History' ? <HistoryIcon /> :
                                                text === 'Playlists' ? <PlaylistPlayIcon /> :
                                                    text === 'Your Videos' ? <VideoLibraryIcon /> :
                                                        text === 'Watch Later' ? <WatchLaterIcon /> :
                                                            text === 'Liked Videos' ? <ThumbUpIcon /> : <HomeIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}

export default Sidebar;
