
export const handleDate = (date, isAdd) => {
  const firstDayOfWeek = date.$locale().weekStart || 7
  let newDate = date;
  const weekSatrtDay = ((newDate.day() === 0 ? 7 : newDate.day()) - firstDayOfWeek);

  if(weekSatrtDay !== 0 && !isAdd) {
    newDate = newDate.add(weekSatrtDay * -1, 'day')
  } else if(6 - weekSatrtDay !== 0 && isAdd) {
    newDate = newDate.add(6 - weekSatrtDay, 'day')
  }

  return newDate;
}
