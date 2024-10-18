import React from 'react';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MenuButton = ({ onClick }) => {
    return (
        <Button onClick={onClick}>
            <MenuIcon />
        </Button>
    );
};

export default MenuButton;
