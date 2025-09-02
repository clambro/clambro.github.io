export function formatDateWithOrdinal(date: Date): string {
  const month = date.toLocaleString('en-US', {
    month: 'long',
    timeZone: 'UTC',
  });
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  return `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;
}

function getOrdinalSuffix(day: number): string {
  const remainder = day % 100;
  if (remainder >= 11 && remainder <= 13) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}
