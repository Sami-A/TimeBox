import { useRef, MouseEvent, useState, useEffect } from "react";
import useDelayUnmount from "helper/useDelayUnmount";

import { useAppDispatch, useAppSelector } from "storeHooks";
import {
  addTopPriority,
  editTopPriority,
  setSelectedPriority,
} from "scene/TimeBox/slice/slice";

import Close from "svg/close";

import { SelectedPriority } from "scene/TimeBox/types";

import animate, { ANIMATION_TYPES, ANIMATION_STYLES } from "helper/animate";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { getFormattedDate } from "helper/dateParser";

type Props = {
  isDrawerOpen: boolean;
  closeDrawer: () => void;
};

const useGu = (max = 90) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (text.length === 90) {
      alert("Max length");
    }
  }, [text]);

  function updateText(value: string): void {
    setText(value);
  }

  return [text, updateText];
};

const Form = ({ isDrawerOpen, closeDrawer }: Props): any => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const [task, setTask] = useState<string>("");

  const selectedPriority = useAppSelector(
    ({ timeBox }) => timeBox.selectedPriority
  );

  useEffect(
    () => setTask(selectedPriority.task || ""),
    [selectedPriority.task]
  );

  /**
       ~ This dialog component unmounting 
         will be delayed by 200ms- for animate purposes.
       ~ Ahh! The things we do for simple animation.
    */
  const delayTimeWhenUnmount = !isDrawerOpen ? 100 : 0;
  const showComponent = useDelayUnmount(isDrawerOpen, delayTimeWhenUnmount);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setTask(selectedPriority.task || "");
  }, [selectedPriority.task]);

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
    setTask("");
    dispatch(setSelectedPriority({} as SelectedPriority));
  }

  function saveTask() {
    if (selectedPriority.task === task) {
      close();
      return;
    }

    if (selectedPriority.task)
      dispatch(editTopPriority({ task, index: selectedPriority.index }));
    else dispatch(addTopPriority({ task }));
    close();
  }

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
            <div className="content-header">
              <h6>{!task ? "Add" : "Edit"} Priority</h6>

              <Close size={16} onPress={close} />
            </div>
            <div className="content-body">
              <input
                spellCheck={true}
                placeholder="Add Task"
                value={task}
                onChange={(e) =>
                  e.target.value.length <= 90 && setTask(e.target.value)
                }
              />
              <span>{task.length}/90</span>
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
      /* display: flex; */
      /* flex-direction: column; */
      input {
        height: 2.4rem;
        width: 100%;
        border-radius: 0.2rem;
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 0 0.5rem;
      }
      span {
        display: block;
        text-align: right;
        color: #757575;
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

export default Form;
