// function romain(str) {
//     const map = {
//         I: 1,
//         V: 5,
//         X: 10,
//         l: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     }

//     let prev = 0
//     let result = 0

//     for(let i = str.length - 1; i >= 0; i--) {
//         let curr = map[str[i]];

         
//     }

// }

// romain("IV")


function romanToArab(romanNum) {
    const romanNumbers = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
    
    let total = 0;
    let prev = 0;
    
    for (let i = romanNum.length - 1; i >= 0; i--) {
      const currentValue = romanNumbers[romanToArab[i]];
      if (currentValue < prev) {
        total -= currentValue;
      } else {
        total += currentValue;
      }
      prev = currentValue;
    }
    
    return total;
  }
  