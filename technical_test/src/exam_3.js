import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const countMinPrefix = (strArr) => {
  return strArr.reduce(
    (min, current) => (current.length < min ? current.length : min),
    200
  );
};

export const findLongestCommonPrefix = (input) => {
  if (input.length === 0) {
    return "";
  }

  if (input.length === 1) {
    return input[0];
  }

  const minPrefix = countMinPrefix(input);
  for (let i = 0; i < minPrefix; i++) {
    let tempChar = input[0][i];
    for (let j = 1; j < input.length; j++) {
      if (input[j][i] !== tempChar) return input[0].slice(0, i);
    }
  }
  return "";
};

export const main = async () => {
  rl.question("Input : ", (input) => {
    const inputArr = input.split(",").map((item) => item);
    const result = findLongestCommonPrefix(inputArr);
    if (result === "") {
      console.log(
        `Output : ""\nExplanation: There is no common prefix among the input strings.`
      );
    } else console.log(`Output : ${result}`);
    rl.close();
  });
};
