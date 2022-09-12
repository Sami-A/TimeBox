import Edit from "svg/edit";
import Trash from "svg/trash";

import styled from "@emotion/styled";

type Props = { openDrawer: () => void };

const Priority = ({ openDrawer }: Props) => {
  return (
    <PriorityContainer>
      <p>do Yoga exercise</p>
      <div className="priority-actions">
        <Edit size={21} onPress={openDrawer} />
        <Trash size={21} />
      </div>
    </PriorityContainer>
  );
};

const PriorityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;

  border-bottom: 1px solid #aaa;

  .priority-actions {
    display: flex;
    gap: 0.3rem;
  }
`;

export default Priority;
