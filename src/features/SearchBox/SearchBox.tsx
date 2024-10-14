import React from 'react';
import {Box, Button, InputBase, Tooltip} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

const SearchBox = () => {
    return (
        <Box
            sx={{
                marginLeft: '100px',
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
            <Tooltip title="Search">
                <Button
                    variant="outlined"
                    startIcon={<SearchIcon/>}
                    sx={{
                        height: '40px',
                        borderRadius: '0 40px 40px 0',
                        padding: '0',
                    }}>
                </Button>
            </Tooltip>

            <Tooltip title="Voice Search">
                <Button
                    startIcon={<MicIcon />}
                    sx={{
                        height: 40,
                        width: 40,
                        borderRadius: 'inherit',
                        fontWeight: 500,
                    }}
                />
            </Tooltip>
        </Box>
    );
};

export default SearchBox;
