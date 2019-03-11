export const formatUrl = (url) => {
  let formatted = url;
  if (formatted.indexOf('http') !== 0) {
    formatted = (formatted.indexOf('//') === 0 ? 'https:' : 'https://') + formatted;
  }
  return formatted;
};
