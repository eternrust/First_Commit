// 테스용 단어 : <가<b>나<u>다</u>이렇게</b>말입니다/u>
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tmpWord = ''
const result = [];
const resultObject = [];
const tagWord = [];
rl.on("line", function (line) {
  const word = line;

  word.split('').forEach(value => {
    if (tmpWord.length || value === '<') {
      if (tmpWord.length && value === '<') {
        if (result.length && typeof result[result.length - 1] === 'string') {
          result[result.length - 1] += tmpWord;
        } else {
          result.push(tmpWord);
        }
        tmpWord = '';
      }
      tmpWord += value;
      if (value === '>') {
        if (tmpWord.slice(0,2) === '</' && tagWord.includes(tmpWord.slice(2, -1))) {
          const data = Object.fromEntries([resultObject.pop()]);
          if (resultObject.length) {
            resultObject[resultObject.length - 1][1].push(data)
          } else {
            result.push(data);
          }
        } else {
          resultObject.push([tmpWord.slice(1, -1), new Array()])
          tagWord.push(tmpWord.slice(1, -1));
        }
        tmpWord = '';
      }
    } else {
      if (resultObject.length) {
        const data = resultObject[resultObject.length - 1][1];
        if (data.length && typeof data[data.length - 1] === 'string') {
          data[data.length - 1] += value;
        } else {
          data.push(value);
        }
      } else {
        if (result.length && typeof result[result.length - 1] === 'string') {
          result[result.length - 1] += value;
        } else {
          result.push(value);
        }
      }
    }

  })

  if (tmpWord) {
    result.push(tmpWord)
  }

  rl.close();
}).on("close", function () {
  console.log(JSON.stringify(result, null, 2))

  process.exit();
})