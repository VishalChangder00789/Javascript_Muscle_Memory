// count the number of occurances in a string
// input : aaabbbccccccddeeefffggggggggghhijkkkkllll
// output : a3b3c6....

// n can be maximum
//  single pass sliding window, two pointer, prefix sum

// if you want to avoid special characters
// a-z = 97-122
// 0-9 = 48-57
// A-Z = 65-90
const countOccurances = (s) => {
  let cacheCount = {};
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (cacheCount[s[i]]) {
      cacheCount[s[i]]++;
    } else {
      cacheCount[s[i]] = 1;
    }

    if (cacheCount[s[j]]) {
      cacheCount[s[j]]++;
    } else {
      cacheCount[s[j]] = 1;
    }

    i++;
    j--;
  }

  // while will break when i == j in that case 1 character will be left
  if (cacheCount[s[i]]) {
    cacheCount[s[i]]++;
  } else {
    cacheCount[s[i]] = 1;
  }

  return cacheCount;
};

let s = "aaabbbbccdddeeeee";
let b = countOccurances(s);

let c = Object.entries(b); //key and value will be paired as a array
console.log(c.sort(([a], [b]) => a.localeCompare(b))); // sort it by first element

// sort it by second element
console.log(c.sort(([, a], [, b]) => a - b));
let d = c.sort(([a], [b]) => a.localeCompare(b));

// This is how you access first element is array and it has two elements
console.log(d.map(([a, b]) => a + b).join(""));
console.log(d.map((m) => m[0] + m[1]).join(""));
