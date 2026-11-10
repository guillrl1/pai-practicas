/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 1 2026
 * @desc Water, Stone, Wind Game
 * The program determines the winner between two elements:
 * Water (A) beats Stone (P), Stone (P) beats Wind (V), 
 * and Wind (V) beats Water (A).
 */

'use strict';

const fs = require('fs');

const determineWinner = function(player1, player2) {
  if (player1 === player2) {
    console.log('-');
    return;
  }

  const winsAgainst = {
    'A' : 'P',
    'P' : 'V',
    'V' : 'A'
  }

  if (winsAgainst[player1] === player2) {
    console.log('1');
  }
  else {
    console.log('2');
  }
}

const getInputs = function() {
  const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
  return [input[0], input[1]];
}

function main() {
  const [player1, player2] = getInputs();
  if(player1 !== undefined && player2 !== undefined) {
    determineWinner(player1, player2);
  }
}

if (require.main === module) {
  main();
}