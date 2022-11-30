import { useAppSelector } from "storeHooks";

import Add from "svg/add";

import styled from "@emotion/styled";

type Props = { openDrawer: () => void };

export default function Header({ openDrawer }: Props) {
  const topPriorityLength = useAppSelector(
    ({ timeBox }) => timeBox.topPriority.length
  );

  return (
    <HeaderContainer>
      <h5>Top Priority</h5>
      <button
        onClick={openDrawer}
        disabled={topPriorityLength === 3}
        style={{
          lineHeight: "50%",
          cursor: topPriorityLength === 3 ? "not-allowed" : "pointer",
        }}
      >
        <Add />
      </button>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #fff1bd;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;

  & > button {
    border: none;
    background: none;
  }
`;
