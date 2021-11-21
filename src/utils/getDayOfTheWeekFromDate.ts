import DaysOfTheWeekEnum from "appSrc/enums/daysOfTheWeek";

type DayOfTheWeekEnglish = keyof typeof DaysOfTheWeekEnum;

export default function getDayOfTheWeekFromDate(date: string): string{
  const dateFormat = new Date(date);
  const dayInEnglish = (dateFormat + '').split(' ', 1)[0] as DayOfTheWeekEnglish;
  const dayInDutch = DaysOfTheWeekEnum[dayInEnglish];

  return dayInDutch;
}