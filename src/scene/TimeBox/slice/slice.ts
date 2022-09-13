import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppDispatch } from "store";
import {
  Priority,
  TBrainDump,
  Block,
  BlockType,
  TimeBoxState,
  TimeBoxDataProps,
  SelectedBlock,
  SelectedPriority,
  DateOptions,
} from "../types";

const initialState = {
  selectedDate: DateOptions.TODAY,
  topPriority: [] as Priority[],
  selectedPriority: {} as SelectedPriority,
  brainDump: {} as TBrainDump,
  timeGrid: [] as Block[],
  selectedBlock: {} as SelectedBlock,
};

export const timeBoxSlice = createSlice({
  name: "timeBox",
  initialState,
  reducers: {
    setTimeBox: (
      state: TimeBoxState,
      { payload }: PayloadAction<TimeBoxDataProps>
    ) => {
      const { topPriority, brainDump, timeGrid } = payload;
      state.topPriority = topPriority;
      state.brainDump = brainDump;
      state.timeGrid = timeGrid;
    },
    setSelectedBlock: (
      state: TimeBoxState,
      { payload }: PayloadAction<SelectedBlock>
    ) => {
      state.selectedBlock = payload;
    },
    addToTimeBlock: (
      state: TimeBoxState,
      { payload }: PayloadAction<{ isFullHour: boolean; task: string }>
    ) => {
      const { isFullHour, task } = payload;
      const updated = state.timeGrid.map((item) => {
        if (
          item.hour === state.selectedBlock.hour &&
          item.period === state.selectedBlock.period
        ) {
          let updatedBlock;
          if (isFullHour) {
            updatedBlock = {
              firstHalfHourTask: task,
              secondHalfHourTask: task,
            };
          } else if (state.selectedBlock.type === BlockType.FIRST_HALF_HOUR)
            updatedBlock = { firstHalfHourTask: task };
          else updatedBlock = { secondHalfHourTask: task };

          return { ...item, ...updatedBlock };
        }
        return item;
      });
      state.timeGrid = updated;
    },
    setSelectedPriority: (
      state: TimeBoxState,
      { payload }: PayloadAction<SelectedPriority>
    ) => {
      state.selectedPriority = payload;
    },
    addTopPriority: (
      state: TimeBoxState,
      { payload }: PayloadAction<{ task: string }>
    ) => {
      if (state.topPriority.length === 3 || !payload.task) return;
      const newPriority = { date: "", task: payload.task };
      state.topPriority.push(newPriority);
    },
    editTopPriority: (
      state: TimeBoxState,
      { payload }: PayloadAction<{ task: string; index: number }>
    ) => {
      const updated = state.topPriority.map(
        (item: Priority, priorityIndex: number) => {
          if (priorityIndex === payload.index) {
            return { ...item, task: payload.task };
          }
          return item;
        }
      );
      state.topPriority = updated;
    },
    deleteTopPriority: (
      state: TimeBoxState,
      { payload }: PayloadAction<{ index: number }>
    ) => {
      state.topPriority.splice(payload.index, 1);
    },
    saveBrainDump: (
      state: TimeBoxState,
      { payload }: PayloadAction<{ notes: string }>
    ) => {
      state.brainDump = { date: "", notes: payload.notes };
    },
    setSelectedDate: (
      state: TimeBoxState,
      { payload }: PayloadAction<DateOptions>
    ) => {
      state.selectedDate = payload;
    },
  },
});

export const {
  setTimeBox,
  setSelectedBlock,
  addToTimeBlock,
  setSelectedPriority,
  addTopPriority,
  editTopPriority,
  deleteTopPriority,
  saveBrainDump,
  setSelectedDate,
} = timeBoxSlice.actions;

export const getTimeBoxByDate =
  (dateText: string) => (dispatch: AppDispatch) => {
    console.log("dateText", dateText);
    // const timeBoxData = {} as TimeBoxDataProps;
    // dispatch(setTimeBox(timeBoxData));
  };

export default timeBoxSlice.reducer;
