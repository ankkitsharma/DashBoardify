import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { uuid } from "uuidv4";

export interface widgetState {
  widgetName: String;
  dashboardName: String;
  widgetData: Array<Object>;
  id: ReturnType<typeof uuid>;
}

export interface widgetState1 {
  values: widgetState[];
}

const initialState: widgetState1 = {
  values: [
    {
      widgetName: "",
      dashboardName: "",
      widgetData: [],
      id: uuid(),
    },
  ],
};

export const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    addWidget: (state, action: PayloadAction<widgetState>) => {
      // const { values } = action.payload;
      state.values.push(action.payload);
    },
    removeWidget: (state, action: PayloadAction<ReturnType<typeof uuid>>) => {
      state.values = state.values.filter(
        (widget) => widget.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addWidget, removeWidget } = widgetSlice.actions;

export default widgetSlice.reducer;
