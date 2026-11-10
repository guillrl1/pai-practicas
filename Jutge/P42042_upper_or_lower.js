const fs = require('fs');
char = fs.readFileSync(0, 'utf8').trim();

let caseType = char === char.toUpperCase() ? 'uppercase' : 'lowercase';
let isVowel = 'aeiouAEIOU'.includes(char) ? 'vowel' : 'consonant';

console.log(`${caseType}\n${isVowel}`);
