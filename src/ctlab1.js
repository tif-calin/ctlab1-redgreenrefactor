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

export function capitalizeAndFilter(arr) {
  const newArr = [];

  for(let str of arr) {
    str = str.toUpperCase();
    if(str.startsWith('F')) newArr.push(str);
  }

  return newArr;
}

export function fetchQuotes(obj) {
  return;
}
