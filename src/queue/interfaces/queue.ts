export interface IQueue<T> extends Iterable<T> {
  size(): number;
  isEmpty(): boolean;
  contains(item: T): boolean;
  peek(): T;
  enqueue(item: T): void;
  dequeue(): T | null;
  clear(): void;
  toArray(): T[];
}
