import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
};

const sidebarButtonSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleSidebarButton(state) {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { toggleSidebarButton } = sidebarButtonSlice.actions;

export default sidebarButtonSlice.reducer;
