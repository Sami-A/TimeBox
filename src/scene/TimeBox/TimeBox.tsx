import { useEffect } from "react";
import { useAppDispatch } from "storeHooks";

import { setTimeBox } from "./slice";

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
        <div className="date-filter">Date Filter</div>
        <div className="top-priority">Top Priority</div>
        <div className="brain-dump">Brain Dump</div>
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
  }
  .time-box-utility > div {
    padding-bottom: 1rem;
  }

  .date-filter {
    height: 3rem;
    background: green;
  }
  .top-priority {
    height: 7rem;
    background: yellow;
  }
  .brain-dump {
    height: calc(100% - 10rem);
    background: red;
  }
  /*
  595 x 842 px
  */
`;

export default TimeBox;