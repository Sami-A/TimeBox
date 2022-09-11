import { useRef, MouseEvent, useState, useEffect } from "react";
import useDelayUnmount from "helper/useDelayUnmount";

import { useAppDispatch, useAppSelector } from "storeHooks";
import { addToTimeBlock, setSelectedBlock } from "scene/TimeBox/slice";

import Close from "svg/close";

import { SelectedBlock, BlockType } from "scene/TimeBox/types";

import animate, { ANIMATION_TYPES, ANIMATION_STYLES } from "helper/animate";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { getFormattedDate } from "helper/dateParser";

type Props = {
  isDrawerOpen: boolean;
  closeDrawer: () => void;
};

const TimeBlockForm = ({ isDrawerOpen, closeDrawer }: Props): any => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const [isFullHour, setIsFullHour] = useState<boolean>(false);
  const [task, setTask] = useState<string>("");

  /**
       ~ This dialog component unmounting 
         will be delayed by 200ms- for animate purposes.
       ~ Ahh! The things we do for simple animation.
    */
  const delayTimeWhenUnmount = !isDrawerOpen ? 100 : 0;
  const showComponent = useDelayUnmount(isDrawerOpen, delayTimeWhenUnmount);

  const selectedBlock = useAppSelector(({ timeBox }) => timeBox.selectedBlock);

  console.log("selectedBlock", selectedBlock);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setTask(selectedBlock.task);
  }, [selectedBlock.task]);

  function handelClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (
      (drawerRef.current && drawerRef.current.className === target.className) ||
      target.nodeName === "A"
    ) {
      close();
    }
  }

  function close() {
    closeDrawer();
    setIsFullHour(false);
    setTask("");
    dispatch(setSelectedBlock({} as SelectedBlock));
  }

  const getAllocatedTimeRange = () => {
    const { hour, period, nextHour } = selectedBlock;
    let blockInfo;
    console.log("isFullHour", isFullHour);
    if (isFullHour) {
      blockInfo = `${hour}:00${period} - ${nextHour}`;
    } else if (selectedBlock.type === BlockType.FIRST_HALF_HOUR) {
      blockInfo = `${hour}:00${period} - ${hour}:30${period}`;
    } else blockInfo = `${hour}:30${period} - ${hour}:59${period}`;
    return blockInfo;
  };

  const saveTask = () => {
    dispatch(addToTimeBlock({ task, isFullHour }));
    close();
  };

  const ContentHeader = () => {
    const timeBoxDate = getFormattedDate();

    return (
      <div className="content-header">
        <h6>{timeBoxDate}</h6>

        <Close size={16} onPress={close} />
      </div>
    );
  };

  return (
    showComponent && (
      <DrawerContainer
        ref={drawerRef}
        onClick={handelClick}
        style={
          isDrawerOpen
            ? ANIMATION_STYLES.get(ANIMATION_TYPES.FADE_IN)
            : ANIMATION_STYLES.get(ANIMATION_TYPES.FADE_OUT)
        }
      >
        <div
          className="drawer"
          style={
            isDrawerOpen
              ? ANIMATION_STYLES.get(ANIMATION_TYPES.SLIDE_IN)
              : ANIMATION_STYLES.get(ANIMATION_TYPES.SLIDE_OUT)
          }
        >
          <div className="content">
            <ContentHeader />
            <div className="content-body">
              <input
                placeholder="Add Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />

              <div>{getAllocatedTimeRange()}</div>

              <div className="form-content">
                <label>Full hour</label>
                <input
                  className="pointer"
                  type="checkbox"
                  checked={isFullHour}
                  onChange={() => setIsFullHour(!isFullHour)}
                />
              </div>
            </div>
            <div className="content-footer">
              <button onClick={saveTask}>Save</button>
            </div>
          </div>
        </div>
      </DrawerContainer>
    )
  );
};

const DrawerContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /* z-index: 1; */

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);

  ${({ theme }) => css`
    .drawer {
      overflow-x: hidden;
      min-width: 300px;

      background-color: #fff;

      box-shadow: 0px 24px 38px 3px rgba(0, 0, 0, 0.14),
        0px 9px 46px 8px rgba(0, 0, 0, 0.12),
        0px 11px 15px -7px rgba(0, 0, 0, 0.2);
      border-radius: 0.5rem;
      transition: opacity 200ms ease-in-out;
    }

    .content {
      display: flex;
      flex-direction: column;
    }

    .content-header,
    .content-body,
    .content-footer {
      padding: 0.5rem 1rem;
    }

    .content-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.7rem 1rem;

      background-color: #f3f3f3;
    }
    .content-body {
      padding-top: 1.3rem;
      padding-bottom: 2rem;
      input {
        margin-bottom: 1rem;
        height: 2.4rem;
        width: 100%;
        border-radius: 0.2rem;
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 0 0.5rem;
      }
    }
    .content-footer {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      text-align: right;

      button {
        padding: 0.4rem 1rem;
        border: none;
        border-radius: 0.3rem;
      }
    }
    .form-content {
      display: flex;
      align-items: center;
      padding-top: 0.3rem;
      gap: 0.5rem;
    }
    .form-content > input[type="checkbox"] {
      height: 1rem;
      width: 1rem;
      padding: 0;
      margin: 0;
    }
  `}
`;

export default TimeBlockForm;
