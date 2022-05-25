export default function regexChecker(text) {
  let regexPattern = /(?=^[a-zA-Z0-9-_]{0,}$)(?=.*[a-zA-Z].*)/g;
  let result = regexPattern.test(text);
  return result;
}
