export interface Block {
  date: string;
  hour: number;
  period: "am" | "pm";
  nextHour: string;
  firstHalfHourTask: string;
  secondHalfHourTask: string;

  //orderNumber: number;
  //showLabelOnHover: boolean;
  // [key:string]: string
}

export enum BlockType {
  FIRST_HALF_HOUR = "FirstHalfHour",
  SECOND_HALF_HOUR = "SecondHalfHour",
}

export type SelectedBlock = {
  type: BlockType;
  task: string;
  hour: number;
  period: string;
  nextHour: string;
};

export type TimeBoxState = {
  timeGrid: Block[];
  selectedBlock: SelectedBlock;
};

export type TimeBoxDataProps = {
  timeGrid: Block[];
};
