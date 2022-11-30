import { Block } from "scene/TimeBox/types";

/*
  Time Order: the below list is a list of grid starting from 
  6am and ends at 5am. I could have listed it all down however this fille
  would get very long because we are supporting multiple time order.

  The default day on a clock starts at 7am....(weird).
  Ethiopian day on a clock starts at 1am, 2am...(just like how numbers start).

  Seriously, the Ethiopian way makes a lot of sense.
*/
const defaultTimeOrder = [
  { period: "am", hours: [6, 7, 8, 9, 10, 11] },
  { period: "pm", hours: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { period: "am", hours: [12, 1, 2, 3, 4, 5] },
];
const ethiopianTimeOrder = [
  { period: "am", hours: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { period: "pm", hours: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
];

export enum TIME_ORDER_TYPE {
  DEFAULT = "Default",
  ETHIOPIAN = "Ethiopian",
}

export const getTimeOrder = (orderType: `${TIME_ORDER_TYPE}` = "Default") => {
  const data =
    orderType === TIME_ORDER_TYPE.ETHIOPIAN
      ? formatTimeOrder(ethiopianTimeOrder)
      : formatTimeOrder(defaultTimeOrder);
  return data;
};

export const hydrateTimeBlockWithData = (data: Block[]) => {
  const timeOrder = getTimeOrder();
  return timeOrder.map((timeBlock: Block) => {
    const hydrateTimeBlock = data.find((data: Block) => {
      if (timeBlock.hour === data.hour && timeBlock.period === data.period) {
        return true;
      }
    });
    return hydrateTimeBlock ? hydrateTimeBlock : timeBlock;
  });
};

function formatTimeOrder(arr: any) {
  return arr
    .map(({ period, hours }: any, arrIndex: number) => {
      return hours.map((hour: number, index: number) => {
        return {
          hour,
          period,
          //nextHour: we use this to display allocated time range correctly.
          //11am - 12pm(nextHour) it recognizes am|pm difference
          //Linked list style 11am->12pm->1pm...
          nextHour: nextHour(arr, arrIndex, hours, index),
        };
      });
    })
    .reduce((a: [], b: []) => {
      return a.concat(b);
    }, [] as any);
}

function nextHour(
  timeOrderArray: any,
  orderIndex: number,
  hours: any,
  hourIndex: number
) {
  // console.log("hours[index + 1]", hour, hours[index + 1]);
  let nextHour =
    hours[hourIndex + 1] || timeOrderArray[orderIndex + 1]?.hours[0];
  let nextPeriod = hours[hourIndex + 1]
    ? timeOrderArray[orderIndex]?.period
    : timeOrderArray[orderIndex + 1]?.period;

  if (!nextHour) {
    nextHour = timeOrderArray[0]?.hours[0];
    nextPeriod = timeOrderArray[0]?.period;
  }

  return nextHour + nextPeriod;
}
