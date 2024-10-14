import React from 'react';
import { Box, Button, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                width: '100%',
            }}
        >
            <InputBase
                placeholder="Search..."
                sx={{
                    flex: 1,
                    border: '1px solid #ccc',
                    borderRadius: '40px 0 0 40px',
                    padding: '8px',
                    outline: 'none',
                    height: '40px',
                }}
            />
            <Button
                variant="outlined"
                startIcon={<SearchIcon />}
                sx={{
                    height: '40px',
                    borderRadius: '0 40px 40px 0',
                    padding: '0',
                }}>
            </Button>
        </Box>
    );
};

export default SearchBox;
