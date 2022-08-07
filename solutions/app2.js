const countOfWorkingDays = () => {
  const date1 = new Date(`August 31, 2022`);
  const date2 = new Date(`January 01, 2022`);

  const weeks = (date1.getTime() - date2.getTime()) / 1000 / 60 / 60 / 24 / 7;
  const fullWeeks = Math.trunc(weeks);
  const remainder = weeks - Math.trunc(weeks);

  const weekdays = fullWeeks * 5 + Math.trunc(remainder * 7);

  return weekdays;
};

export default countOfWorkingDays;
