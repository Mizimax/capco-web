export const getFullDateString = (dateString: string) => {
  const date = new Date(dateString);
  // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    hourCycle: 'h24',
    minute: 'numeric',
    timeZone: 'Asia/Bangkok',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};
