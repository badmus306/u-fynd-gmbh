/*
    Author: Badmus Segun
*/
const input = '{"value": 10, "targetDate": "2020-01-01"}\n{"value": 14, "targetDate": "2020-01-03"}\n{"value": 12, "targetDate": "2020-01-02"}';

const data = input
  .split("\n")
  .filter(t => !!t)
  .map(i => JSON.parse(i));

const newItem = new Map();

for (const item of data) {
  newItem.set(item.targetDate, item);
}

console.log(JSON.stringify([...newItem]));

