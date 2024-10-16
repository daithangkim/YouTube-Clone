// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import sidebarButtonReducer from '../components/Header/HeaderStartBox/sidebarButtonSlice'; // Correct import

const store = configureStore({
    reducer: {
        sidebarButton: sidebarButtonReducer, // This should match the slice name
    },
});

export default store;
