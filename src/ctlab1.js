export function getName(obj) {
  // return obj['name'];
  // return obj.name;
  const { name } = obj;
  return name;
}

export function copyAndPush(arr, item) {
  // arr.push(item);
  return [...arr, item];
}

export function capitalizeAndFilter(arr, filter = 'F') {
  return arr.map(str => str.toUpperCase()).filter(str => !str.startsWith(filter));
}

export function fetchQuotes(obj) {
  return;
}
