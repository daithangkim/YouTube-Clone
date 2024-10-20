import {configureStore} from '@reduxjs/toolkit';
import sidebarButtonReducer from '../components/Header/HeaderStartBox/sidebarButtonSlice';
import categoryReducer from "../components/Sidebar/categorySlice";

const store = configureStore({
    reducer: {
        sidebarButton: sidebarButtonReducer,
        category: categoryReducer,
    },
});

export default store;
