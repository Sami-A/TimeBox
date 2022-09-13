import { useEffect } from "react";
import { useAppDispatch } from "storeHooks";

import { setTimeBox } from "./slice/slice";

import DateFilter from "./components/DateFilter/index.";
import TopPriorities from "./components/TopPriority/TopPriorities";
import BrainDump from "./components/BrainDump/BrainDump";
import TimeGrid from "./components/TimeGrid/TimeGrid";

import { TimeBoxDataProps } from "./types";

import {
  getTimeOrder,
  hydrateTimeBlockWithData,
} from "./components/TimeGrid/util";

import { breakPoints } from "config/theme";
import styled from "@emotion/styled";

const TimeBox = ({ timeBoxData }: { timeBoxData: TimeBoxDataProps }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // const timeOrder = getTimeOrder();
    timeBoxData.timeGrid = hydrateTimeBlockWithData(timeBoxData.timeGrid);
    // console.log("timeGridValues", timeGridValues);
    dispatch(setTimeBox(timeBoxData));
  }, [timeBoxData, dispatch]);

  return (
    <TimeBoxContainer>
      <div className="time-box-utility">
        <DateFilter />
        <TopPriorities />
        <BrainDump />
      </div>
      <TimeGrid />
    </TimeBoxContainer>
  );
};

const TimeBoxContainer = styled.div`
  height: inherit;

  @media (min-width: ${breakPoints.lg}px) {
    display: flex;
  }

  .time-box-utility {
    flex: 0 0 40%;
    padding: 0.3rem;
  }
  .time-box-utility > div {
    padding-bottom: 1rem;
  }
  /*
  595 x 842 px
  */
`;

export default TimeBox;
