import { MouseEventHandler } from "react";
import { useAppSelector, useAppDispatch } from "storeHooks";
import { setSelectedBlock } from "scene/TimeBox/slice/slice";

import { Block, BlockType } from "scene/TimeBox/types";

type Props = {
  blockItem: Block;
  openDrawer: Function;
};

const TimeBlock = ({ blockItem, openDrawer }: Props) => {
  const dispatch = useAppDispatch();

  // const blockTask: any = useAppSelector(getBlockTasks(hour));
  
  function handelBlockSelection(type: BlockType, task: string) {
    const { hour, period, nextHour } = blockItem;
    dispatch(
      setSelectedBlock({
        type,
        task,
        hour,
        period,
        nextHour,
      })
    );
    openDrawer();
  }

  return (
    <div className="block-row">
      <div className="block-label">
        {blockItem.hour} <small>{blockItem.period}</small>
      </div>
      <div
        className="block"
        onClick={() =>
          handelBlockSelection(
            BlockType.FIRST_HALF_HOUR,
            blockItem?.firstHalfHourTask
          )
        }
        // onMouseOver={() => /*ToDo:*/ (item.showLabelOnHover = true)}
        // onMouseOut={() => /*ToDo:*/ (item.showLabelOnHover = false)}
      >
        {blockItem?.firstHalfHourTask}
        {/* {item.firstHalfHour}
        {item.showLabelOnHover && "+ Add task"} */}
      </div>
      <div
        className="block"
        onClick={() =>
          handelBlockSelection(
            BlockType.SECOND_HALF_HOUR,
            blockItem?.secondHalfHourTask
          )
        }
      >
        {blockItem?.secondHalfHourTask}
        {/* {item.secondHalfHour} */}
      </div>
    </div>
  );
};

export default TimeBlock;
