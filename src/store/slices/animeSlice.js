import { createSlice } from "@reduxjs/toolkit";

const animeSlice = createSlice({
    name: "anime",
    initialState: {
        loading: true,
        anime: [],
        error: false,
    },
    extraReducers: {},
});
