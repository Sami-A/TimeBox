import TimeBox from "scene/TimeBox/TimeBox";
import { TimeBoxDataProps } from "scene/TimeBox/types";

import { getFormattedDate } from "helper/dateParser";

type Props = {
  timeBoxData: TimeBoxDataProps;
};

export default function Entry({ timeBoxData }: Props) {
  return <TimeBox timeBoxData={timeBoxData} />;
}

export async function getServerSideProps() {
  const topPriority = [
    {
      date: getFormattedDate(new Date()),
      task: "top task",
    },
  ];

  const brainDump = [
    {
      date: getFormattedDate(new Date()),
      notes: "ideas or brain storm",
    },
  ];

  const timeGrid = [
    {
      date: getFormattedDate(new Date()),
      hour: 6,
      period: "am",
      nextHour: "7am",
      firstHalfHourTask: "GUGU",
      secondHalfHourTask: "GAGA",
      index: 0,
      userId: "34343-3434-dfgdfgd-f334345",
    },
    {
      date: getFormattedDate(new Date()),
      hour: 7,
      period: "am",
      nextHour: "8am",
      firstHalfHourTask: "LOMA",
      secondHalfHourTask: "LOMA",
      index: 0,
      userId: "34343-3434-dfgdfgd-f334345",
    },
  ];

  const timeBoxData = { timeGrid, topPriority, brainDump };

  return { props: { timeBoxData } };
}
