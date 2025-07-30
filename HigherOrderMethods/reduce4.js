// Create a pipeline method
// We have a user input where we need to first trim it then lowerCase it and then hash it or add salt on it
// trim
// lowercase
//hash
//salt

// incomplete

const myHash = (input) => {
  // the input will be lowercase lets say bishal
  // we are going to hash it by using letter
  // we will find the characterencoding
  // add +2 in it and then we will find the character of that encoding
  let encodedCharacter = "";
  for (let i = 0; i < input.length; i++) {
    let code = input.charCodeAt(i);
    let newCode = code + 2;
    let newCharacter = String.fromCharCode(newCode);
    encodedCharacter += newCharacter;
  }
  return encodedCharacter;
};

const addSalt = (input) => {
  // enter letters between characters randomly
  let saltedHash = "";
  for (let i = 0; i < input.length; i++) {
    // console.log(String.fromCharCode(Math.floor(Math.random() * (10 - 8) * 10)));
    saltedHash +=
      input[i] + String.fromCharCode(Math.floor(Math.random() * (10 - 8) * 10));
  }

  return saltedHash;
};

console.log(myHash("bishal"));
console.log(addSalt("dkujcn"));

const input = "     BISHAL      CHANGDER";

const pipeline = (...fns) => {
  return function (input) {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, input);
  };
};
