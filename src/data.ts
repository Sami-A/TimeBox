import { getFormattedDate } from "helper/dateParser";

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

const timeBoxData = (date: string = getFormattedDate(new Date())) => {
  const filteredTopPriority = topPriority.filter(
    (item: any) => item.date === date
  );
  const filteredBrainDump = brainDump.find((item: any) => item.date === date);
  const filteredTimeGrid = timeGrid.filter((item: any) => item.date === date);

  return {
    topPriority: filteredTopPriority,
    brainDump: filteredBrainDump,
    timeGrid: filteredTimeGrid,
  };
};

export default timeBoxData;
