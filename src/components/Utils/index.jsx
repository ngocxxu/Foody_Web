export function convertToQueryUrl(obj) {
  const params = new URLSearchParams(obj);
  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      params.delete(key);
      value.forEach((v) => params.append(key, v));
    }
  }
  return params.toString();
}

export const handleFormatName = (name) => {
  const getFirstAndLastName = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(' ')
    .filter((item, index, array) => array.indexOf(item) === index)
    .filter(
      (item, _, array) =>
        array.indexOf(item) === 0 || array.indexOf(item) === array.length - 1
    )
    .join(' ');
  const result = getFirstAndLastName
    .toUpperCase()
    .match(/\b(\w)/g)
    ?.join('');
  return result;
};
