/* 
write a function "duplicate" which duplicate an array instance

Author: Badmus Segun
*/

Array.prototype.duplicate = function() {
    return this.concat(this);
  };
  
  const oldArray = [1, 2, 3, 4];
  const duplicatedArray = oldArray.duplicate();
  
  console.log(duplicatedArray);