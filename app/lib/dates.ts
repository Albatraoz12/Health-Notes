export const getDate = () => {
  const date = new Date();
  return date;
};

export const date = getDate();
export const formattedDate = date.toISOString().split('T')[0];

export const days = [
  'Söndag',
  'Måndag',
  'Tisdag',
  'Onsdag',
  'Torsdag',
  'Fredag',
  'Lördag',
];

export const dayName = days[date.getDay()];
