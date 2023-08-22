import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = "df8748021fa744db86eaa3e659f732a3"; // Replace with your API key

// Define the Article type based on the properties returned by the API
interface Article {
  title: string;
  description: string;
}

export const fetchTopHeadlines = createAsyncThunk(
  "news/fetchTopHeadlines",
  () => {
    return axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((response) => response.data.articles as Article[]);
  }
);

export const fetchEverything = createAsyncThunk("news/fetchEverything", () => {
  return axios
    .get(`https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`)
    .then((response) => response.data.articles as Article[]);
});

interface NewsState {
  topHeadlines: {
    data: Article[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
  };
  everything: {
    data: Article[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
  };
}

const initialState: NewsState = {
  topHeadlines: {
    data: [],
    status: "idle",
    error: null,
  },
  everything: {
    data: [],
    status: "idle",
    error: null,
  },
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopHeadlines.pending, (state) => {
        state.topHeadlines.status = "loading";
      })
      .addCase(fetchTopHeadlines.fulfilled, (state, action) => {
        state.topHeadlines.status = "succeeded";
        state.topHeadlines.data = action.payload;
      })
      .addCase(fetchTopHeadlines.rejected, (state, action) => {
        state.topHeadlines.status = "failed";
        // state.topHeadlines.error = action.error.message;
      })
      .addCase(fetchEverything.pending, (state) => {
        state.everything.status = "loading";
      })
      .addCase(fetchEverything.fulfilled, (state, action) => {
        state.everything.status = "succeeded";
        state.everything.data = action.payload;
      })
      .addCase(fetchEverything.rejected, (state, action) => {
        state.everything.status = "failed";
        // state.everything.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;

// Define the RootState type
interface RootState {
  news: NewsState;
  // ... other slices' states if applicable
}

export const selectTopHeadlinesData = (state: RootState) =>
  state.news.topHeadlines.data;
export const selectEverythingData = (state: RootState) =>
  state.news.everything.data;
