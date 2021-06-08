import fetch from 'node-fetch';

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

export function fetchQuotes(num = 1) {
  const quote = fetch(`http://futuramaapi.herokuapp.com/api/quotes/${num}`)
    .then(response => response.json())
    .then(data => ({
      character: data[0].character,
      quote: data[0].quote,
      image: data[0].image
    }));

  return quote;
}
