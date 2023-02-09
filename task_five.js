/* 
    Author: Badmus Segun
*/

function main(input) {
    const data = input.split("\n").filter(t => !!t).map(i => parseInt(i));
    let streamNum = [];
  
    for (const number of data) {
      streamNum.push(number);
      streamNum.sort((a, b) => a - b);
  
      if (streamNum.length % 2 === 0) {
        const median = (streamNum[streamNum.length / 2 - 1] + streamNum[streamNum.length / 2]) / 2;
        console.log(median);
      } else {
        console.log(streamNum[Math.floor(streamNum.length / 2)]);
      }
    }
  }
  
  const input = "6\n12\n4\n5\n3\n8\n7";
  main(input);
  