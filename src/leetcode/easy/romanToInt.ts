export function romanToInt(s: string) {
  s = s.replace("IV", "a");
  s = s.replace("IX", "b");
  s = s.replace("XL", "c");
  s = s.replace("XC", "d");
  s = s.replace("CD", "e");
  s = s.replace("CM", "f");
  let val = 0;
  for (let str of s) {
    switch (str) {
      case "I":
        val += 1;
        break;
      case "V":
        val += 5;
        break;
      case "X":
        val += 10;
        break;
      case "L":
        val += 50;
        break;
      case "C":
        val += 100;
        break;
      case "D":
        val += 500;
        break;
      case "M":
        val += 1000;
        break;
      case "a":
        val += 4;
        break;
      case "b":
        val += 9;
        break;
      case "c":
        val += 40;
        break;
      case "d":
        val += 90;
        break;
      case "e":
        val += 400;
        break;
      case "f":
        val += 900;
        break;
    }
  }
  return val;
}
