/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 3 2026
 * @desc Prime Palindromic Numbers (Interactive)
 */

'use strict';

const readline = require('readline');

const isPrime = function(n) {
  if (n < 2) return false;
  if (n < 4) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
};

const isPalindromic = function(n) {
  const s = n.toString();
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++; j--;
  }
  return true;
};

// Precalculamos la lista globalmente una sola vez
const primePalindromes = [];
let candidate = 2;
while (primePalindromes.length < 750) {
  if (isPalindromic(candidate) && isPrime(candidate)) {
    primePalindromes.push(candidate);
  }
  candidate++;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
  });

  // Este evento se dispara cada vez que el usuario pulsa ENTER
  // (Para evitrar saturar la memoria con mucha entrada de golpe)
  rl.on('line', (line) => {
    const tokens = line.trim().split(/\s+/);
    
    for (const token of tokens) {
      if (token === "") continue;
      
      const idx = Number(token);
      if (!Number.isNaN(idx) && idx >= 1 && idx <= 750) {
        process.stdout.write(primePalindromes[idx - 1] + '\n');
      }
    }
  });
}

if (require.main === module) {
  main();
}