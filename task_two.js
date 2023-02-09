function logCar() {
    console.log(this.color + " " + this.brand);
  }
  
  const input = '{"color" : "red", "brand": "Mercedez"}\n{"color" : "white", "brand": "Toyota"}\n{"color" : "Gray", "brand": "Audi"}';
  
  function main(input) {
    const data = input
      .split("\n")
      .filter((t) => !!t)
      .map((i) => JSON.parse(i));
  
    data.forEach(function(car) {
      let logCarBound = logCar.bind(car);
      logCarBound();
    });
  }
  

