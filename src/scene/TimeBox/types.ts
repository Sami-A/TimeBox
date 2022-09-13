export enum DateOptions {
  TODAY = "Today",
  TOMORROW = "Tomorrow",
}

export interface TBrainDump {
  date: string;
  notes: string;

  //userId: string;
}
export interface Priority {
  date: string;
  task: string;

  //userId: string;
}
export interface SelectedPriority {
  task: string;
  index: number;
}
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
  selectedDate: DateOptions;
  topPriority: Priority[];
  selectedPriority: SelectedPriority;
  brainDump: TBrainDump;
  timeGrid: Block[];
  selectedBlock: SelectedBlock;
};

export type TimeBoxDataProps = {
  topPriority: Priority[];
  brainDump: TBrainDump;
  timeGrid: Block[];
};
