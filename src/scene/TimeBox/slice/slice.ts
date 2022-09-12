import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "store";
import {
  Priority,
  Block,
  BlockType,
  TimeBoxState,
  TimeBoxDataProps,
  SelectedBlock,
  SelectedPriority,
} from "../types";

const initialState = {
  topPriority: [] as Priority[],
  selectedPriority: {} as SelectedPriority,
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
      const { topPriority, timeGrid } = payload;
      state.timeGrid = timeGrid;
      state.topPriority = topPriority;
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
} = timeBoxSlice.actions;

export const getBlockTasks =
  (hour: number) =>
  ({ timeBox }: RootState) => {
    const blockTask = timeBox.timeGrid.find((item: Block) => {
      // console.log("item", item.hour === hour);
      return item.hour === hour;
    });
    // console.log("hour", hour, timeBox.timeGrid,blockTask);
    return blockTask;
    // console.log("blockTask", blockTask);
  };

export default timeBoxSlice.reducer;
