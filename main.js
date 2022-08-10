const input = "tuRpEntIne and turtles";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i].toLowerCase() === "e" || input[i].toLowerCase() === "u") {
    resultArray.push(input[i].toLowerCase());
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i].toLowerCase() === vowels[j]) {
      resultArray.push(input[i].toLowerCase());
    }
  }
}

const resultString = resultArray.join("").toUpperCase();
console.log(resultString);
