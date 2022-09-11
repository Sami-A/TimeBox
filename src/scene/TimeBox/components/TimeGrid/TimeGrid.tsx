import { useState } from "react";

import TimeBlock from "./components/TimeBlock";
import TimeBlockForm from "./components/TimeBlockForm";

import { Block } from "../../types";

import { getTimeOrder } from "./util";

import useSafeMap from "helper/useSafeMap";

import styled from "@emotion/styled";
import { useAppSelector } from "storeHooks";

const TimeGrid = () => {
  const timeGridList = useAppSelector(({ timeBox }) => timeBox.timeGrid);

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  function openDrawer() {
    setIsDrawerOpen(true);
  }

  return (
    <>
      <TimeGridContainer>
        <div className="blocks-header block-row">
          <div className="block-label">Hour</div>
          <div className="block text-center">:00</div>
          <div className="block text-center">:30</div>
        </div>
        {useSafeMap(timeGridList, (item: Block, index: number) => (
          <TimeBlock key={index} blockItem={item} openDrawer={openDrawer} />
        ))}
      </TimeGridContainer>
      {isDrawerOpen && (
        <TimeBlockForm isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
      )}
    </>
  );
};

const TimeGridContainer = styled.div`
  height: 21rem;
  background: blue;
  height: inherit;
  padding: 1rem;
  flex: 0 0 60%;

  & > .block-row:last-child {
    border-bottom: 1px solid #000;
  }
  .block-row {
    display: flex;
    border: 1px solid #000;
    border-bottom: none;

    & > div {
      padding: 0.7rem 0.5rem;
    }
  }
  .block-label {
    flex: 1 1 5rem;
    text-align: center;
  }
  .block {
    flex: 1 1 50%;
    border-left: 0.1px solid #000;
    cursor: pointer;
  }
`;

export default TimeGrid;
