export const handleWeekLastDay = date => {
  const firstDayOfWeek = date.$locale().weekStart || 7;
  const day = date.day() || 7;
  const weekStartDay = firstDayOfWeek === day ? 6 : Math.abs(firstDayOfWeek - day - 1);

  console.log('LastDay', weekStartDay, date.format('YYYY-MM-DD'))

  const newDate = date.add(weekStartDay, "day");

  return newDate;
};

export const handleWeekOneDay = date => {
  const firstDayOfWeek = date.$locale().weekStart || 7;
  const day = date.day() || 7;
  const weekStartDay = firstDayOfWeek === day ? 0 : Math.abs(7 - firstDayOfWeek - day);

  console.log('OneDayOneDay',weekStartDay,  date.format('YYYY-MM-DD'))
  const newDate = date.subtract(weekStartDay, "day");

  return newDate;
};
