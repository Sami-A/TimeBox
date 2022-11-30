import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "storeHooks";

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
import useSearch from "helper/useSearch";
import { getFullDateString } from "helper/dateParser";
import Spinner from "armor/Spinner";

const TimeBox = ({}: { timeBoxData: TimeBoxDataProps }) => {
  const selectedDate = useAppSelector(
    ({ timeBox: { selectedDate } }) => selectedDate
  );
  const dispatch = useAppDispatch();

  const dateText = getFullDateString(selectedDate);
  const {
    isLoading,
    data: timeBoxData,
    error,
  } = useSearch<TimeBoxDataProps>(`timebox?date=${dateText}`);

  console.log("gugug", timeBoxData);

  useEffect(() => {
    // const timeOrder = getTimeOrder();

    if (timeBoxData) {
      timeBoxData.timeGrid = hydrateTimeBlockWithData(timeBoxData.timeGrid);
      dispatch(setTimeBox(timeBoxData));
    }
  }, [timeBoxData, dispatch]);

  return (
    <TimeBoxContainer>
      {isLoading ? (
        <div className="loading-box">
          <Spinner />
          <h5>
            Loading {selectedDate}
            {"'s"} Time Box...
          </h5>
        </div>
      ) : (
        <>
          <div className="time-box-utility">
            <DateFilter />
            <TopPriorities />
            <BrainDump />
          </div>
          <TimeGrid />
        </>
      )}
    </TimeBoxContainer>
  );
};

const TimeBoxContainer = styled.div`
  height: inherit;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  padding: 0 0.5rem;

  @media (min-width: ${breakPoints.lg}px) {
    display: flex;
  }

  .loading-box {
    flex: 0 0 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h5 {
      margin-top: 0.5rem;
    }
  }
  .time-box-utility {
    flex: 0 0 40%;
    padding-top: 0.3rem;
    padding-right: 0.4rem;
  }
  .time-box-utility > div {
    padding-bottom: 1rem;
  }
  /*
  595 x 842 px
  */
`;

export default TimeBox;
