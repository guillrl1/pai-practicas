/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    notification-service.test.js
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Tests demonstrating Jest mock functions (jest.fn) and spies
 *          (jest.spyOn). Covers call tracking, return values, and spy cleanup.
 */

const { sendNotification, formatItems, logger } = require('./notification-service');

describe('Mock Functions with jest.fn()', () => {
  /**
   * Creating a basic mock function and verifying it was called.
   */
  test('should call the sender function exactly once', () => {
    const mockSender = jest.fn();
    sendNotification('Alice', 'Hello!', mockSender);
    expect(mockSender).toHaveBeenCalledTimes(1);
  });

  /**
   * Verifying the arguments passed to the mock.
   */
  test('should call the sender with the correct arguments', () => {
    const mockSender = jest.fn();
    sendNotification('Bob', 'Hi there!', mockSender);
    expect(mockSender).toHaveBeenCalledWith('Bob', 'Hi there!');
  });

  /**
   * Testing the return value of the function under test.
   */
  test('should return a result object with sent status', () => {
    const mockSender = jest.fn();
    const result = sendNotification('Charlie', 'Welcome', mockSender);
    expect(result).toEqual({ sent: true, to: 'Charlie' });
  });

  /**
   * Mock function with a custom implementation.
   */
  test('mock sender can have a custom implementation', () => {
    const mockSender = jest.fn((recipient, message) => {
      return `Sent '${message}' to ${recipient}`;
    });
    sendNotification('Diana', 'Test', mockSender);
    expect(mockSender).toHaveReturnedWith(`Sent 'Test' to Diana`);
  });

  /**
   * Verifying the mock was NOT called when an error is thrown.
   */
  test('should not call sender if recipient is missing', () => {
    const mockSender = jest.fn();
    expect(() => sendNotification('', 'Hello', mockSender)).toThrow(
      'Recipient and message are required.'
    );
    expect(mockSender).not.toHaveBeenCalled();
  });

  /**
   * Using mockReturnValue to control what a mock returns.
   */
  test('mock can return a predefined value', () => {
    const mockFn = jest.fn();
    mockFn.mockReturnValue(42);
    expect(mockFn()).toBe(42);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  /**
   * Using mockReturnValueOnce for sequential return values.
   */
  test('mock can return different values on successive calls', () => {
    const mockFn = jest.fn();
    mockFn.mockReturnValueOnce('first').mockReturnValueOnce('second');
    expect(mockFn()).toBe('first');
    expect(mockFn()).toBe('second');
    expect(mockFn()).toBeUndefined();
  });
});

describe('Spying with jest.spyOn()', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  /**
   * Spying on an object method to verify it was called
   * without changing its original behavior.
   */
  test('should spy on logger.log and verify the call', () => {
    const spy = jest.spyOn(logger, 'log');
    logger.log('Testing spy');
    expect(spy).toHaveBeenCalledWith('Testing spy');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  /**
   * Replacing the implementation of a spy temporarily.
   */
  test('spy can override the implementation', () => {
    const spy = jest.spyOn(logger, 'log').mockImplementation(() => {});
    logger.log('This should not print');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  /**
   * Spying on Array.prototype method.
   */
  test('can spy on Array.prototype.join used by formatItems', () => {
    const spy = jest.spyOn(Array.prototype, 'join');
    const result = formatItems(['a', 'b', 'c']);
    expect(spy).toHaveBeenCalledWith(', ');
    expect(result).toBe('a, b, c');
  });
});
