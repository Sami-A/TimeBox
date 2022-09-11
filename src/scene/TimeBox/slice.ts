import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "store";
import {
  Block,
  BlockType,
  TimeBoxState,
  TimeBoxDataProps,
  SelectedBlock,
} from "./types";

const initialState = {
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
      const { timeGrid } = payload;
      state.timeGrid = timeGrid;
    },
    setSelectedBlock: (
      state: TimeBoxState,
      { payload }: PayloadAction<SelectedBlock>
    ) => {
      console.log("KUKUKKKUKUKU",payload)
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
  },
});

export const { setTimeBox, setSelectedBlock, addToTimeBlock } =
  timeBoxSlice.actions;

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
