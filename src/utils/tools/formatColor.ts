export const changeColor = (data: string) => {
  if (data.includes('+')) {
    return '#06F7A1';
  } else if (data.includes('-')) {
    return '#FF483D';
  } else {
    return '#d9d9d9';
  }
};
