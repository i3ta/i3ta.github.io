export type TimelineItem = {
  organization: string;
  role: string;
  startDate: Date;
  endDate?: Date;
  tags?: Array<string>;
  description?: string;
};
