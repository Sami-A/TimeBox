// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import timeBoxData from "data";

import { TimeBoxDataProps, TBrainDump } from "scene/TimeBox/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TimeBoxDataProps>
) {
  const { date } = req.query;
  console.log("req", date);
  setTimeout(() => {
    res.status(200).json(timeBoxData(date as string) as TimeBoxDataProps);
  }, 1000);
}
