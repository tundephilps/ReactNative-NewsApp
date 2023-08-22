import { configureStore } from "@reduxjs/toolkit";
import newsReducer, {
  selectTopHeadlinesData,
  selectEverythingData,
} from "./newSlice"; // Correct path to your newsSlice

// Define the RootState type
interface RootState {
  news: ReturnType<typeof newsReducer>;
  // ... other slices' states if applicable
}

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;

export { selectTopHeadlinesData, selectEverythingData };
