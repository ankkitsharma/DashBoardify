import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface widgetState {
  widgetName: String;
  dashboardName: String;
  widgetData: Object;
}

const initialState: widgetState[] = [
  {
    widgetName: "",
    dashboardName: "",
    widgetData: {},
  },
];

export const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    addWidget: (state, action: PayloadAction<widgetState>) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addWidget } = widgetSlice.actions;

export default widgetSlice.reducer;
