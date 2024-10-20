import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { toggleSidebarButton } from '../Header/HeaderStartBox/sidebarButtonSlice';
import MenuButton from "../MenuButton";
import logo from '../../assets/icon.png';
import HomeIcon from '@mui/icons-material/Home';
import TheatersIcon from '@mui/icons-material/Theaters';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SearchIcon from '@mui/icons-material/Search';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import GetAppIcon from '@mui/icons-material/GetApp';
import { setCategory } from "./categorySlice";

const Sidebar = () => {
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector((state) => state.sidebarButton.isOpen);
    const selectedCategory = useSelector((state) => state.category.selectedCategory);

    const handleToggleSidebar = () => {
        dispatch(toggleSidebarButton());
    };

    const handleCategoryClick = (category) => {
        dispatch(setCategory(category));
        handleToggleSidebar();
    };

    return (
        <Drawer
            anchor="left"
            open={isSidebarOpen}
            onClose={handleToggleSidebar}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
            >
                <Box sx={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
                    <MenuButton onClick={handleToggleSidebar} />
                    <img src={logo} alt="Logo" style={{ width: 'auto', height: '50px', marginLeft: '8px' }} />
                </Box>

                <List>
                    {['Home', 'Shorts', 'Subscriptions'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                onClick={() => handleCategoryClick(text)}
                                sx={{
                                    borderRadius: '60px',
                                    marginLeft: 1,
                                    marginRight: 1,
                                    backgroundColor: selectedCategory === text.toLowerCase() ? 'lightgray' : 'transparent', // Highlight if selected
                                }}
                            >
                                <ListItemIcon>
                                    {text === 'Home' ? <HomeIcon /> : text === 'Shorts' ? <TheatersIcon /> : <SubscriptionsIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Divider />

                <List>
                    {['Your Channel', 'History', 'Playlists', 'Your Videos', 'Watch Later', 'Liked Videos'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                onClick={() => handleCategoryClick(text)}
                                sx={{
                                    borderRadius: '60px',
                                    marginLeft: 1,
                                    marginRight: 1,
                                    backgroundColor: selectedCategory === text.toLowerCase() ? 'lightgray' : 'transparent', // Highlight if selected
                                }}
                            >
                                <ListItemIcon>
                                    {text === 'Your Channel' ? <AccountCircleIcon /> :
                                        text === 'History' ? <HistoryIcon /> :
                                            text === 'Playlists' ? <PlaylistPlayIcon /> :
                                                text === 'Your Videos' ? <VideoLibraryIcon /> :
                                                    text === 'Watch Later' ? <WatchLaterIcon /> :
                                                        <ThumbUpIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Divider />

                <List>
                    {['Trending', 'Playlist', 'Downloads'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                onClick={() => handleCategoryClick(text)}
                                sx={{
                                    borderRadius: '60px',
                                    marginLeft: 1,
                                    marginRight: 1,
                                    backgroundColor: selectedCategory === text.toLowerCase() ? 'lightgray' : 'transparent', // Highlight if selected
                                }}
                            >
                                <ListItemIcon>
                                    {text === 'Trending' ? <TrendingUpIcon /> :
                                        text === 'Search' ? <SearchIcon /> :
                                            text === 'Playlist' ? <QueueMusicIcon /> :
                                                <GetAppIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
