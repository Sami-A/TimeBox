import { useAppSelector, useAppDispatch } from "storeHooks";

import { setSelectedDate, getTimeBoxByDate } from "scene/TimeBox/slice/slice";

import { DateOptions } from "scene/TimeBox/types";

import Select from "armor/Select";

import styled from "@emotion/styled";
import { getFullDateString } from "helper/dateParser";

const DateFilter = () => {
  const selectedDate = useAppSelector(({ timeBox }) => timeBox.selectedDate);

  const dispatch = useAppDispatch();

  function handelChange(value: DateOptions) {
    if (selectedDate === value) return;

    dispatch(setSelectedDate(value));
    const dateText = getFullDateString(value);
    dispatch(getTimeBoxByDate(dateText));
  }

  const options = Object.values(DateOptions);
  return (
    <DateContainer>
      <Select options={options} onChange={handelChange} />
    </DateContainer>
  );
};

const DateContainer = styled.div`
  /* height: auto; */
`;

export default DateFilter;
