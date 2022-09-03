import styled from "@emotion/styled";
import { breakPoints } from "config/theme";

export const CoreLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: pink;
`;

export const MainContainer = styled.div`
  height: calc(100vh - 4rem); // minus the toolbar height
  width: 100%;

  @media (min-width: ${breakPoints.lg}px) {
    width: 842px;
  }
`;

export const ToolBarContainer = styled.div`
  background-color: black;
  color: #fff;
  height: 4rem;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  

  & > div {
    display: flex;
    gap: 1rem;
  }
`;
