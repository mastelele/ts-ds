import { IStack } from '../interfaces';

export class Stack<T> implements IStack<T> {
  private items: T[];

  constructor(items?: T[]) {
    this.items = items ? [...items] : [];
  }

  public size(): number {
    return this.items.length;
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public contains(item: T): boolean {
    return this.items.includes(item);
  }

  public clear(): void {
    this.items = [];
  }

  public peek(): T | null {
    return this.size() === 0 ? null : this.items[this.size() - 1];
  }

  public push(item: T): void {
    this.items.push(item);
  }

  public pop(): T | null {
    return this.size() === 0 ? null : (this.items.pop() as T);
  }

  public toArray(): T[] {
    return this.items.slice();
  }

  [Symbol.iterator](): Iterator<T> {
    return this.items[Symbol.iterator]();
  }
}
