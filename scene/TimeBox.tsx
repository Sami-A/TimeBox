import styled from "@emotion/styled";
import { breakPoints } from "config/theme";

const TimeBox = () => (
  <TimeBoxContainer>
    <div className="time-box-utility">
      <div className="date-filter">Date Filter</div>
      <div className="top-priority">Top Priority</div>
      <div className="brain-dump">Brain Dump</div>
    </div>
    <div className="time-box">Time Box</div>
  </TimeBoxContainer>
);

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
  .time-box {
    flex: 0 0 60%;
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
  .time-box {
    height: 21rem;
    background: blue;
    height: inherit;
  }
  /*
  595 x 842 px
  */
`;

export default TimeBox;
