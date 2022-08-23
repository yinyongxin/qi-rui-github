export const formatTableData = (data: any) => {
  if (data / 100 < 0) {
    return data;
  } else {
    return `+${data}`;
  }
};
