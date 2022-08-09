// 下载文件
export const downloadFile = async (
  data: BlobPart,
  fileName: string,
  fileType: string
) => {
  try {
    const blob = new Blob([data]);
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.${fileType}`;
    link.click();
  } catch (error) {
    console.error(error);
  }
};
