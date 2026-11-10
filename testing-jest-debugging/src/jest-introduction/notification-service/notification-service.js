/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    notification-service.js
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    A simple notification service that depends on an external sender.
 *          Used to demonstrate mocking and spying in Jest.
 */

'use strict';

/**
 * Sends a notification using the provided sender function.
 * @param {string} recipient The person to notify.
 * @param {string} message The message body.
 * @param {Function} senderFn A callback function that performs the actual send.
 * @return {object} An object with the status and details of the notification.
 */
function sendNotification(recipient, message, senderFn) {
  if (!recipient || !message) {
    throw new Error('Recipient and message are required.');
  }
  senderFn(recipient, message);
  return { sent: true, to: recipient };
}

/**
 * Formats a list of items into a comma-separated string.
 * @param {string[]} items The items to format.
 * @return {string} The formatted string.
 */
function formatItems(items) {
  return items.join(', ');
}

/**
 * A logger utility with a log method.
 */
const logger = {
  /**
   * Logs a message to the console.
   * @param {string} message The message to log.
   */
  log(message) {
    console.log(`[LOG]: ${message}`);
  },
};

module.exports = { sendNotification, formatItems, logger };
