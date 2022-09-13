import { useAppDispatch } from "storeHooks";

import {
  setSelectedPriority,
  deleteTopPriority,
} from "scene/TimeBox/slice/slice";

import Edit from "svg/edit";
import Trash from "svg/trash";

import styled from "@emotion/styled";

type Props = { task: string; index: number; openDrawer: () => void };

const Priority = ({ task, index, openDrawer }: Props) => {
  const dispatch = useAppDispatch();

  function preparePriorityForEdit() {
    dispatch(setSelectedPriority({ task, index }));
    openDrawer();
  }

  function deleteTask() {
    dispatch(deleteTopPriority({ index }));
  }

  return (
    <PriorityContainer>
      <p style={{ padding: task ? "0.5rem 0" : "1rem 0" }}>{task}</p>
      {task && (
        <div className="priority-actions">
          <Edit size={21} onPress={preparePriorityForEdit} />
          <Trash size={21} onPress={deleteTask} />
        </div>
      )}
    </PriorityContainer>
  );
};

const PriorityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 1rem 0; */
  .padding-sm {
    padding: 0.5rem 0;
  }
  .padding-lg {
    padding: 1rem 0;
  }

  border-bottom: 1px solid #aaa;

  .priority-actions {
    display: flex;
    gap: 0.3rem;
  }
`;

export default Priority;
