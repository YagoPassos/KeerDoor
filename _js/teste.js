function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1));// + ourMin;
  }
  
  console.log(ourRandomRange(5, 9));

  