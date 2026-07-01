import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const { VITE_API_URL } = import.meta.env;

export const getAnimeData = createAsyncThunk(
    "anime/fetchAnimeData",
    async () => {
        try {
            const res = await axios.get(VITE_API_URL);

            return res.data;
        } catch (error) {
            console.log(error.response);
        }
    }
);

const animeSlice = createSlice({
    name: "anime",
    initialState: {
        loading: true,
        animeData: [],
        error: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getAnimeData.fulfilled, (state, action) => {
            state.loading = false;
            state.animeData = action.payload;
        });
    },
});

export default animeSlice.reducer;
