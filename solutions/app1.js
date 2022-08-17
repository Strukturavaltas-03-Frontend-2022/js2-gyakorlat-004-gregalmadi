const getSecondsOfThisYearUntilNow = () => {
  const date1 = new Date(`August 31, 2022`);
  const date2 = new Date(`January 01, 2022`);
  return Math.round((date1.getTime() - date2.getTime()) / 1000);
};

export default getSecondsOfThisYearUntilNow;
