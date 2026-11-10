const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\n+/);

let last = parseInt(input[0]);
let result = '';
for (let i = 0; i <= last; i++) {
  last !== i ? result += i + '\n' : result += i;
}

console.log(result);