import { useState } from "react";
import { useAppSelector } from "storeHooks";

import useSafeMap from "helper/useSafeMap";

import TimeBlock from "./components/TimeBlock";
import TimeBlockForm from "./components/TimeBlockForm";

import { Block } from "../../types";

import styled from "@emotion/styled";

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
        <div className="block-row">
          <div className="block-label">Hour</div>
          <div className="block block-header text-center">:00</div>
          <div className="block block-header text-center">:30</div>
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
  height: inherit;
  padding-top: 0.3rem;
  flex: 0 0 60%;
  overflow: auto;

  & > .block-row:last-child {
    border-bottom: 1px solid #aaa;
  }
  .block-row {
    display: flex;
    border: 1px solid #aaa;
    border-bottom: none;

    & > div {
      padding: 0.7rem 0.5rem;
    }
  }
  .block-row:first-child{
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
  }
  .block-row:last-child{
    border-bottom-left-radius: .3rem;
    border-bottom-right-radius: .3rem;
  }
  .block-label {
    flex: 1 1 5rem;
    text-align: center;
  }
  .block,
  .block-header {
    flex: 1 1 50%;
    border-left: 0.1px solid #aaa;
  }
`;

export default TimeGrid;
