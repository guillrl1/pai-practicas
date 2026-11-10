/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    shopping-cart.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    A shopping cart class used to demonstrate setup/teardown hooks
 *          and parameterized tests (test.each) in Jest.
 */

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

/**
 * Represents a simple shopping cart.
 */
export class ShoppingCart {
  private items: CartItem[] = [];

  /**
   * Adds an item to the cart.
   * @param {CartItem} item The item to add.
   */
  addItem(item: CartItem): void {
    if (item.price < 0 || item.quantity <= 0) {
      throw new Error('Price must be non-negative and quantity must be positive.');
    }
    const existing = this.items.find((i) => i.name === item.name);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.items.push({ ...item });
    }
  }

  /**
   * Removes an item from the cart by name.
   * @param {string} name The name of the item to remove.
   * @return {boolean} True if the item was found and removed.
   */
  removeItem(name: string): boolean {
    const index = this.items.findIndex((i) => i.name === name);
    if (index === -1) return false;
    this.items.splice(index, 1);
    return true;
  }

  /**
   * Returns the total price of all items in the cart.
   * @return {number} The total cost.
   */
  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  /**
   * Returns the number of distinct items in the cart.
   * @return {number} The item count.
   */
  getItemCount(): number {
    return this.items.length;
  }

  /**
   * Empties the cart.
   */
  clear(): void {
    this.items = [];
  }

  /**
   * Applies a percentage discount to the total.
   * @param {number} percent Discount percentage (0-100).
   * @return {number} The discounted total.
   */
  applyDiscount(percent: number): number {
    if (percent < 0 || percent > 100) {
      throw new Error('Discount must be between 0 and 100.');
    }
    return this.getTotal() * (1 - percent / 100);
  }
}
