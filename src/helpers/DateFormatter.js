const DateFormatter = new Intl.DateTimeFormat('id-ID', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZone: 'Asia/Jakarta',
});

export { DateFormatter };
